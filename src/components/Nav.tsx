import { useState } from 'react';
import { PRICING } from '../data/content';

const NAV_LINKS = [
  { label: 'O evento', href: '#o-que-e' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Mentores', href: '#mentores' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-[oklch(0.98_0.005_80_/_0.95)] backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4 max-lg:px-5"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/images/logo_sw_timbo.webp"
            alt="Techstars Startup Weekend Timbó"
            className="h-28 w-auto max-lg:h-20 my-[-14px] object-contain [mix-blend-mode:multiply]"
          />
        </a>

        {/* Desktop links */}
        <ul className="flex gap-7 max-lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-[0.8125rem] font-semibold uppercase tracking-[0.04em] text-ink-soft transition-colors hover:text-orange"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={PRICING.symplaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-orange px-5 py-2.5 font-display text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-white transition-all hover:-translate-y-px hover:bg-orange-dark max-lg:hidden"
        >
          Inscreva-se
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="hidden max-lg:flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span
            className={`block h-[2px] w-5 bg-ink transition-all duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-ink transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-ink transition-all duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`hidden max-lg:block overflow-hidden border-t border-[var(--line-soft)] bg-[oklch(0.98_0.005_80_/_0.98)] backdrop-blur-md transition-all duration-300 ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <div className="px-8 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-[0.9375rem] font-semibold uppercase tracking-[0.04em] text-ink-soft transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href={PRICING.symplaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-md bg-orange py-3.5 text-center font-display text-[0.875rem] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-orange-dark"
            >
              Inscreva-se
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
