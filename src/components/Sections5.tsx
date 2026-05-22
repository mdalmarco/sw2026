import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { SPONSORS, FAQ as FAQ_DATA, EVENT, PRICING } from '../data/content';

// ════════════════ PATROCINADORES ════════════════
export function Sponsors() {
  const tiers = [
    { key: 'global' as const, label: 'Patrocinadores Globais', badge: 'Global', badgeClass: 'bg-orange text-white', cols: 'grid-cols-4 max-md:grid-cols-2', slots: 4 },
    { key: 'estadual' as const, label: 'Patrocinadores Estaduais', badge: 'Estadual', badgeClass: 'bg-blue text-white', cols: 'grid-cols-4 max-md:grid-cols-2', slots: 4 },
    { key: 'local' as const, label: 'Patrocinadores Locais', badge: 'Local', badgeClass: 'bg-paper border border-[var(--line)] text-ink', cols: 'grid-cols-4 max-md:grid-cols-2', slots: 4 },
  ];

  return (
    <section className="bg-paper-warm py-20" aria-labelledby="sponsors-title">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <SectionHeader
          id="sponsors-title"
          eyebrow="Quem torna isso possível"
          title={
            <>
              Empresas que <em className="not-italic text-orange">acreditam</em> no
              empreendedorismo do Vale.
            </>
          }
        />

        {tiers.map((tier) => {
          const sponsors = SPONSORS[tier.key];
          return (
            <div key={tier.key} className="mb-14 last:mb-0">
              <div className="mb-5 flex items-center gap-4">
                <span className="font-display text-[0.75rem] font-bold uppercase tracking-[0.12em] text-ink">
                  {tier.label}
                </span>
                <span
                  className={`rounded px-2.5 py-1 font-display text-[0.625rem] font-bold uppercase tracking-[0.1em] ${tier.badgeClass}`}
                >
                  {tier.badge}
                </span>
                <div className="h-px flex-1 bg-[var(--line)]" />
              </div>
              <div className={`grid gap-5 ${tier.cols}`}>
                {sponsors.length > 0
                  ? sponsors.map((s) => (
                      <div
                        key={s.name}
                        className={`flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[10px] p-4 transition-transform hover:-translate-y-0.5 ${
                          String(s.dark) === 'true' ? 'bg-ink' : 'bg-paper-warm'
                        }`}
                      >
                        <img
                          src={s.logo}
                          alt={s.name}
                          loading="lazy"
                          className={`max-h-full max-w-full object-contain [mix-blend-mode:multiply] ${
                            String(s.dark) === 'true' ? '![mix-blend-mode:normal]' : ''
                          }`}
                        />
                      </div>
                    ))
                  : Array.from({ length: tier.slots }).map((_, i) => (
                      <div
                        key={i}
                        className="flex aspect-[16/9] items-center justify-center rounded-[10px] bg-paper-warm font-display text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-ink-faint"
                      >
                        [ Em breve ]
                      </div>
                    ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ════════════════ FAQ ════════════════
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-20" aria-labelledby="faq-title">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <SectionHeader
          id="faq-title"
          eyebrow="Perguntas frequentes"
          title={
            <>
              As <em className="not-italic text-orange">10 perguntas</em> que todo mundo faz.
            </>
          }
        />
        <div className="mx-auto max-w-[800px]">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className="border-b border-[var(--line)]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center gap-4 py-5 text-left font-display text-[1.0625rem] font-bold text-ink transition-colors hover:text-orange"
              >
                <span
                  className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--orange-soft)] font-display text-[0.875rem] font-extrabold text-orange transition-transform ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
                <span className="flex-1">{item.q}</span>
              </button>
              {open === i && (
                <div className="pb-6 pl-10 font-body text-base leading-[1.6] text-ink-soft">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════ CTA FINAL ════════════════
export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-paper-deep py-36 text-center"
      aria-labelledby="final-cta-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, oklch(0.94 0.04 50) 0%, transparent 50%), radial-gradient(circle at 70% 80%, oklch(0.92 0.03 230) 0%, transparent 45%)',
        }}
      />
      <div className="relative mx-auto max-w-[980px] px-8 max-md:px-5">
        <span className="mb-6 inline-flex items-center gap-2.5 font-display text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[var(--orange-deep)]">
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-orange" />
          Faltam{' '}
          <strong className="font-extrabold text-orange">{EVENT.daysUntil} dias</strong> ·{' '}
          {EVENT.dateRange}
        </span>
        <h2
          id="final-cta-title"
          className="mx-auto mb-6 max-w-[18ch] font-display text-[clamp(2.25rem,5vw,3.75rem)] font-black leading-[1.05] tracking-[-0.025em] text-ink"
        >
          Em agosto, alguém vai construir{' '}
          <em className="not-italic text-orange">algo novo</em> em Timbó.
        </h2>
        <p className="mx-auto mb-10 max-w-[48ch] font-body text-[1.125rem] leading-[1.55] text-ink-soft">
          Pode ser você. 54 horas. Uma ideia. Um time. Um produto no domingo à noite.
        </p>
        <a
          href={PRICING.symplaUrl} target="_blank" rel="noopener noreferrer"
          className="inline-block min-h-[56px] rounded-lg bg-orange px-9 py-[18px] font-display text-[0.9375rem] font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_2px_12px_oklch(0.5_0.12_40_/_0.18)] transition-all hover:-translate-y-0.5 hover:bg-orange-dark"
        >
          Quero participar
        </a>
      </div>
    </section>
  );
}

// ════════════════ STICKY MOBILE CTA ════════════════
export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] border-t border-[var(--line)] bg-paper p-3 shadow-[0_-4px_16px_oklch(0_0_0_/_0.06)] md:hidden">
      <a
        href={PRICING.symplaUrl} target="_blank" rel="noopener noreferrer"
        className="block w-full rounded-lg bg-orange py-4 text-center font-display text-[0.9375rem] font-extrabold uppercase tracking-[0.06em] text-white"
      >
        Inscreva-se · Faltam {EVENT.daysUntil} dias
      </a>
    </div>
  );
}

// ════════════════ FOOTER ════════════════
export function Footer() {
  return (
    <footer className="bg-ink py-16 pb-8 text-paper" role="contentinfo">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <div className="mb-12 grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-md:grid-cols-2">
          <div>
            <div className="mb-3 font-display text-[1.25rem] font-black uppercase leading-tight tracking-[0.05em]">
              Startup Weekend
              <br />
              <span className="text-orange">Timbó</span>
            </div>
            <p className="max-w-[36ch] font-body text-[0.9375rem] leading-[1.5] text-[oklch(0.7_0.01_60)]">
              Um fim de semana para experimentar, na prática, o que é empreender. {EVENT.dateRange}{' '}
              de 2026, em Timbó/SC.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-display text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-orange">
              Evento
            </h4>
            <ul className="grid gap-2.5">
              {[
                { label: 'O que é', href: '#o-que-e' },
                { label: 'Como funciona', href: '#como-funciona' },
                { label: 'Mentores', href: '#mentores' },
                { label: 'Blog', href: '#blog' },
                { label: 'FAQ', href: '#faq' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body text-[0.9375rem] leading-[1.5] text-[oklch(0.85_0.01_60)] no-underline hover:text-orange"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-display text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-orange">
              Contato
            </h4>
            <ul className="grid gap-2.5 font-body text-[0.9375rem] leading-[1.5] text-[oklch(0.85_0.01_60)]">
              <li>{EVENT.contact.email}</li>
              {EVENT.contact.people.map((p) => (
                <li key={p.name}>
                  {p.name} · {p.phone}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-display text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-orange">
              Siga
            </h4>
            <ul className="grid gap-2.5">
              {['Instagram @sw.timbo', 'LinkedIn', 'Techstars Global'].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-body text-[0.9375rem] leading-[1.5] text-[oklch(0.85_0.01_60)] no-underline hover:text-orange"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[oklch(0.3_0.01_60)] pt-6">
          <span className="font-display text-[0.75rem] tracking-[0.04em] text-[oklch(0.6_0.01_60)]">
            © 2026 · Startup Weekend Timbó · Powered by Techstars
          </span>
          <span className="font-display text-[0.75rem] tracking-[0.04em] text-[oklch(0.6_0.01_60)]">
            CETISA · Av. Getúlio Vargas, 222 · Timbó SC
          </span>
        </div>
      </div>
    </footer>
  );
}
