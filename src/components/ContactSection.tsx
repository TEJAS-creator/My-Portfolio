'use client';

import { useState } from 'react';
import { z } from 'zod';
import { SectionHeader } from './SectionHeader';
import { Send, PhoneCall, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '@/data/site';

const clientContactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  email: z.string().trim().email('Please enter a valid email address'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters'),
});

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '', // Honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus('idle');
    setStatusMessage('');

    // Client-side Zod validation
    const validation = clientContactSchema.safeParse({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus('error');
        setStatusMessage(
          data.message || 'Failed to send message. Please reach out directly to tejasnj14@gmail.com'
        );
        if (data.errors) {
          setErrors(data.errors);
        }
      } else {
        setStatus('success');
        setStatusMessage(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please try again or email tejasnj14@gmail.com directly.');
    }
  };

  return (
    <section className="w-full flex flex-col">
      <SectionHeader label="Contact" id="contact" />

      <div className="py-6 flex flex-col gap-5">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* Honeypot field (hidden from visual users) */}
          <input
            type="text"
            name="_gotcha"
            value={formData._gotcha}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-[11px] font-mono uppercase tracking-wider text-[var(--muted)] font-medium"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              disabled={status === 'loading'}
              className={`w-full px-3.5 py-2.5 rounded-xl border bg-[var(--panel-card)] text-sm text-[var(--fg)] placeholder-[var(--muted)] transition-colors focus:border-[var(--border-focus)] focus:outline-none disabled:opacity-50 ${
                errors.name ? 'border-red-500/80' : 'border-[var(--border)]'
              }`}
            />
            {errors.name && (
              <span className="text-[11.5px] text-red-400 font-mono">{errors.name}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-[11px] font-mono uppercase tracking-wider text-[var(--muted)] font-medium"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@domain.com"
              disabled={status === 'loading'}
              className={`w-full px-3.5 py-2.5 rounded-xl border bg-[var(--panel-card)] text-sm text-[var(--fg)] placeholder-[var(--muted)] transition-colors focus:border-[var(--border-focus)] focus:outline-none disabled:opacity-50 ${
                errors.email ? 'border-red-500/80' : 'border-[var(--border)]'
              }`}
            />
            {errors.email && (
              <span className="text-[11.5px] text-red-400 font-mono">{errors.email}</span>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-[11px] font-mono uppercase tracking-wider text-[var(--muted)] font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Hello Tejas, let's discuss an AI or software project..."
              disabled={status === 'loading'}
              className={`w-full px-3.5 py-2.5 rounded-xl border bg-[var(--panel-card)] text-sm text-[var(--fg)] placeholder-[var(--muted)] transition-colors resize-none focus:border-[var(--border-focus)] focus:outline-none disabled:opacity-50 ${
                errors.message ? 'border-red-500/80' : 'border-[var(--border)]'
              }`}
            />
            {errors.message && (
              <span className="text-[11.5px] text-red-400 font-mono">{errors.message}</span>
            )}
          </div>

          {/* Status Banners */}
          {status === 'success' && (
            <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="p-3.5 rounded-xl border border-red-500/30 bg-red-950/20 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            {/* Jump on a call link button */}
            <a
              href={siteConfig.schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl border border-[var(--border)] bg-[var(--pill-bg)] text-sm font-medium text-[var(--fg)] hover:border-[var(--pill-hover-border)] transition-colors flex items-center justify-center gap-2 cursor-pointer select-none"
            >
              <PhoneCall className="w-4 h-4 stroke-[1.75]" />
              <span>Jump on a call</span>
            </a>

            {/* Send Message Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl border border-[var(--border)] bg-[var(--pill-bg)] text-sm font-medium text-[var(--fg)] hover:border-[var(--pill-hover-border)] transition-colors flex items-center justify-center gap-2 cursor-pointer select-none disabled:opacity-50"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 stroke-[1.75]" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
