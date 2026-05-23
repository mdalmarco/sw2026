import { EVENT, PRICING } from '../data/content';

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-paper py-16 pb-14" role="banner">
      {/* Gradiente atmosférico de fundo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, oklch(0.97 0.025 55) 0%, transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.95 0.025 230) 0%, transparent 35%)',
        }}
      />

      <div className="relative mx-auto grid max-w-[980px] gap-6 px-8 max-md:px-5">
        {/* Eyebrow temporal */}
        <div className="flex flex-wrap items-center gap-3.5">
          <span className="inline-flex items-center gap-2 font-display text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-ink">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-orange" />
            A próxima edição começa em{' '}
            <strong className="font-extrabold text-orange">{EVENT.daysUntil} dias</strong>{' '}
            · acontece uma vez por ano
          </span>
          <span className="rounded bg-paper-warm px-2.5 py-1 font-display text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink-muted">
            {EVENT.edition}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mt-1 max-w-[16ch] font-display text-[clamp(2.5rem,6.8vw,4.75rem)] font-black leading-[1.05] tracking-[-0.032em]"
          aria-label="54 horas para tirar uma ideia do papel e descobrir do que você é capaz."
        >
          54 horas para tirar uma{' '}
          <span className="text-orange" aria-hidden="true">ideia do papel</span>
          {' '}e descobrir do que você é capaz.
        </h1>

        {/* Subheadline */}
        <p className="max-w-[50ch] font-body text-[clamp(1.0625rem,2vw,1.3125rem)] leading-[1.5] text-ink-soft">
          Traga sua ideia ou escolha uma das melhores no primeiro dia. Forme um time,
          construa com mentores e apresente para jurados no domingo.{' '}
          <strong className="font-semibold text-ink">
            Empreender na prática, em um fim de semana, no Vale do Itajaí.
          </strong>
        </p>

        {/* CTAs */}
        <div className="mt-2 flex flex-wrap items-center gap-6">
          <a
            href={PRICING.symplaUrl} target="_blank" rel="noopener noreferrer"
            className="min-h-[56px] rounded-lg bg-orange px-9 py-[18px] font-display text-[0.9375rem] font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_2px_12px_oklch(0.5_0.12_40_/_0.18)] transition-all hover:-translate-y-0.5 hover:bg-orange-dark hover:shadow-[0_6px_20px_oklch(0.5_0.12_40_/_0.25)]"
          >
            Quero participar
          </a>
          <a
            href="#vibe"
            className="border-b border-[var(--line)] pb-0.5 font-display text-[0.875rem] font-semibold uppercase tracking-[0.04em] text-ink-soft transition-colors hover:border-orange hover:text-orange"
          >
            Ver como é estar lá ↓
          </a>
        </div>

        {/* Meta bar */}
        <div className="mt-3 flex flex-wrap gap-8 border-t border-[var(--line)] pt-6">
          {[
            { label: 'Quando', value: EVENT.dateLabel },
            { label: 'Onde', value: EVENT.venueShort },
            { label: 'Duração', value: EVENT.duration },
            { label: 'Pré-requisito', value: 'Nenhum' },
          ].map((m) => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <span className="font-display text-[0.625rem] font-bold uppercase tracking-[0.12em] text-ink-faint">
                {m.label}
              </span>
              <span className="font-display text-sm font-bold text-ink">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
