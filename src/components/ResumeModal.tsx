'use client';

import { useState } from 'react';
import { FileText, Download, X, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'details'>('preview');

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume View"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-xs transition-opacity animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] bg-[var(--panel)] border border-[var(--border)] rounded-xl flex flex-col overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-[var(--border)] bg-[var(--panel)]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[var(--muted)]" />
            <span className="text-sm font-medium text-[var(--fg)]">
              {siteConfig.name} — Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-[var(--pill-bg)] border border-[var(--border)] rounded-md p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  activeTab === 'preview'
                    ? 'bg-[var(--panel)] text-[var(--fg)] font-medium'
                    : 'text-[var(--muted)] hover:text-[var(--fg)]'
                }`}
              >
                PDF View
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('details')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  activeTab === 'details'
                    ? 'bg-[var(--panel)] text-[var(--fg)] font-medium'
                    : 'text-[var(--muted)] hover:text-[var(--fg)]'
                }`}
              >
                Summary
              </button>
            </div>

            <a
              href={siteConfig.resumePath}
              download={siteConfig.resumeDownloadName}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-[var(--border)] bg-[var(--pill-bg)] text-xs font-medium text-[var(--fg)] hover:border-[var(--pill-hover-border)] transition-colors"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--pill-bg)] transition-colors cursor-pointer"
              aria-label="Close resume view"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {activeTab === 'preview' ? (
            <div className="w-full h-[68vh] rounded-lg overflow-hidden border border-[var(--border)] bg-[#121212] flex flex-col">
              <iframe
                src={`${siteConfig.resumePath}#toolbar=0`}
                className="w-full h-full border-none"
                title={`${siteConfig.name} Resume PDF`}
              />
            </div>
          ) : (
            <div className="space-y-5 text-sm">
              {/* Education */}
              <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--panel-card)]">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Education</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-semibold text-[var(--fg)]">
                    {siteConfig.education.degree}, {siteConfig.education.field}
                  </h4>
                  <span className="text-xs text-[var(--muted)] font-mono">
                    {siteConfig.education.period}
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-light)] mt-0.5">
                  {siteConfig.education.institution} • CGPA: {siteConfig.education.cgpa}
                </p>
                <div className="mt-2 text-xs text-[var(--muted)]">
                  <span className="font-medium text-[var(--fg)]">Relevant Coursework: </span>
                  {siteConfig.education.coursework.join(', ')}
                </div>
              </div>

              {/* Certifications */}
              <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--panel-card)]">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                  <Award className="w-3.5 h-3.5" />
                  <span>Certifications</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {siteConfig.certifications.map((cert) => (
                    <div
                      key={cert.title}
                      className="p-2.5 rounded border border-[var(--border)] bg-[var(--panel)] text-xs"
                    >
                      <span className="font-medium text-[var(--fg)] block">{cert.title}</span>
                      <span className="text-[var(--muted)] text-[11px] font-mono mt-0.5 block">
                        Issuer: {cert.issuer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct links */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-[var(--border)] bg-[var(--panel-card)] text-xs">
                <span className="text-[var(--muted)]">Full version ready for offline viewing</span>
                <a
                  href={siteConfig.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-medium text-[var(--fg)] hover:underline"
                >
                  Open PDF directly in new tab <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
