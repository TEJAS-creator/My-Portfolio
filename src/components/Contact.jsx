import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tejasnj14@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      console.log('Contact form submitted:', formData);
      const mailtoLink = `mailto:tejasnj14@gmail.com?subject=Contact from Portfolio - ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
      window.location.href = mailtoLink;
      
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Column - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-text-main">Let's talk about your project</h3>
              
              <p className="text-text-muted leading-relaxed font-sans text-sm sm:text-base">
                I'm always open to discussing new opportunities, full-stack website creation, AI/RAG system developments, or just general chats about tech! Drop me a message, and I'll get back to you as soon as possible.
              </p>

              {/* Info Cards Stack */}
              <div className="space-y-4">
                
                {/* Email Card */}
                <div className="flex items-center gap-4 p-4 bg-card border border-white/5 rounded-xl hover:border-accent/20 transition-all duration-300">
                  <div className="p-3 bg-background rounded-lg text-accent border border-white/5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="text-xs text-text-muted font-sans font-medium">Email Me</div>
                    <a href="mailto:tejasnj14@gmail.com" className="text-sm font-bold text-text-main hover:text-accent truncate block transition-colors">
                      tejasnj14@gmail.com
                    </a>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-2 text-text-muted hover:text-accent hover:bg-background rounded-lg transition-colors border border-transparent hover:border-white/5"
                    title="Copy Email"
                  >
                    {copied ? <CheckCircle2 className="h-4.5 w-4.5 text-green-400" /> : <Copy className="h-4.5 w-4.5" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="flex items-center gap-4 p-4 bg-card border border-white/5 rounded-xl hover:border-accent/20 transition-all duration-300">
                  <div className="p-3 bg-background rounded-lg text-accent border border-white/5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-sans font-medium">Call Me</div>
                    <a href="tel:+919353870346" className="text-sm font-bold text-text-main hover:text-accent transition-colors block">
                      +91 93538 70346
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-center gap-4 p-4 bg-card border border-white/5 rounded-xl hover:border-accent/20 transition-all duration-300">
                  <div className="p-3 bg-background rounded-lg text-accent border border-white/5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-sans font-medium">Location</div>
                    <div className="text-sm font-bold text-text-main">
                      Bengaluru, Karnataka, India
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Social profiles summary */}
            <div className="pt-6 border-t border-white/5">
              <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4 font-sans">
                Connect on Socials
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/tejas-n-june2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-accent font-semibold transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-white/10">|</span>
                <a
                  href="https://github.com/Tejas-creator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-accent font-semibold transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column - 7 Cols */}
          <div className="lg:col-span-7">
            <div className="h-full p-6 sm:p-8 bg-card border border-white/5 rounded-2xl flex flex-col justify-center shadow-lg relative">
              
              {status === 'success' && (
                <div className="absolute inset-0 bg-card rounded-2xl flex flex-col items-center justify-center p-6 text-center z-10 animate-fade-in-up">
                  <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full mb-4">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-2">Message Sent Successfully!</h3>
                  <p className="text-sm text-text-muted max-w-sm mb-6 font-sans">
                    Thank you for reaching out, Tejas. Your message has been logged, and the mail client has been initialized.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-background border border-white/5 hover:border-accent/40 text-text-main rounded-xl text-sm font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-text-muted block font-sans">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 bg-background border border-white/5 hover:border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-sm text-text-main placeholder-text-muted/50 outline-none transition-all"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-text-muted block font-sans">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="w-full px-4 py-3 bg-background border border-white/5 hover:border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-sm text-text-main placeholder-text-muted/50 outline-none transition-all"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-text-muted block font-sans">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What would you like to discuss..."
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-background border border-white/5 hover:border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-sm text-text-main placeholder-text-muted/50 outline-none resize-none transition-all"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-400 font-sans">Please fill in all fields before submitting.</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary/95 text-text-main font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 hover:shadow-lg hover:shadow-primary/20"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-text-main border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
