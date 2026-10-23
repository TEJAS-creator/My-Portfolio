import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Simple in-memory sliding window rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 4;

  const current = rateLimitMap.get(ip);
  if (!current || now > current.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (current.count >= maxRequests) {
    return true;
  }

  current.count += 1;
  return false;
}

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().trim().email('Please enter a valid email address'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(3000, 'Message is too long'),
  _gotcha: z.string().optional(), // Honeypot field
});

export async function POST(req: NextRequest) {
  // Extract client IP
  const forwardedFor = req.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        message: 'Too many requests. Please wait a few minutes before trying again.',
      },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();

    // Honeypot check: Bots fill hidden fields
    if (body._gotcha) {
      return NextResponse.json(
        { success: false, message: 'Spam detected.' },
        { status: 400 }
      );
    }

    // Server-side Zod validation
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid input. Please check your submission.',
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'tejasnj14@gmail.com';

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Email service not configured yet. Please configure RESEND_API_KEY in your environment variables.',
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: toEmail,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}\n\nSent from portfolio website.`,
    });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message || 'Failed to dispatch email via Resend.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! Tejas will get back to you soon.',
    });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: err instanceof Error ? err.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
