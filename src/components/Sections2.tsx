import { SectionHeader } from './SectionHeader';
import { PROFILES, BARRIERS, INTRA, VIBE_PHOTOS } from '../data/content';

// ════════════════ QUOTE BREAK ════════════════
export function QuoteBreak({
  variant,
  eyebrow,
  children,
  context,
}: {
  variant: 'warm' | 'deep';
  eyebrow: string;
  children: React.ReactNode;
  context: string;
}) {
  return (
    <section
      className={`py-[120px] ${variant === 'warm' ? 'bg-paper-warmer' : 'bg-paper-deep'}`}
      aria-label="Momento marcante"
    >
      <div className="mx-auto max-w-[980px] px-8 max-md:px-5">
        <div className="mb-8 flex items-center gap-3 font-display text-[0.75rem] font-bold uppercase tracking-[0.15em] text-[var(--orange-deep)]">
          <span className="h-0.5 w-8 bg-orange" />
          {eyebrow}
        </div>
        <p className="max-w-[22ch] font-display text-[clamp(2rem,5vw,3.75rem)] font-black leading-[1.05] tracking-[-0.025em] text-ink">
          {children}
        </p>
        <div className="mt-8 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink-muted">
          {context}
        </div>
      </div>
    </section>
  );
}

// ════════════════ PARA QUEM É ════════════════
export function ForWho() {
  return (
    <section className="bg-paper py-24" aria-labelledby="for-who-title">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <SectionHeader
          id="for-who-title"
          eyebrow="É pra você"
          title={
            <>
              Você se reconhece em <em className="not-italic text-orange">algum desses?</em>
            </>
          }
        />
        <p className="-mt-8 mb-10 max-w-[56ch] font-body text-[1.0625rem] leading-[1.6] text-ink-soft">
          Você não precisa querer abrir uma empresa.{' '}
          <strong className="font-semibold text-ink">
            Muita gente vem para desenvolver habilidades que usa no trabalho e na carreira.
          </strong>
        </p>

        {/* Perfis positivos */}
        <div className="mb-14 grid grid-cols-4 gap-4 rounded-xl bg-paper-warm p-8 max-md:grid-cols-2">
          {PROFILES.map((p) => (
            <div
              key={p}
              className="flex items-start gap-3 font-display text-[0.9375rem] font-semibold leading-[1.4] text-ink"
            >
              <span className="shrink-0 text-[1.125rem] font-extrabold text-orange">→</span>
              {p}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative mb-8 text-center">
          <span className="absolute left-0 right-0 top-1/2 z-0 h-px bg-[var(--line)]" />
          <span className="relative z-10 bg-paper px-4 font-display text-[0.75rem] font-bold uppercase tracking-[0.12em] text-ink-muted">
            E se você ainda tem dúvidas...
          </span>
        </div>

        {/* Barreiras */}
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {BARRIERS.map((b) => (
            <div key={b.question} className="rounded-xl bg-paper-warm p-8">
              <div className="mb-3.5 font-body text-[1.0625rem] italic leading-[1.4] text-ink-muted">
                {b.question}
              </div>
              <div
                className="font-display text-[0.9375rem] font-semibold leading-[1.55] text-ink [&_strong]:font-extrabold [&_strong]:text-[var(--orange-deep)]"
                dangerouslySetInnerHTML={{ __html: b.answer }}
              />
            </div>
          ))}
        </div>

        {/* Bridge para blog */}
        <div className="mt-8 rounded-[10px] bg-paper-warm p-5 text-center font-body text-[0.9375rem] text-ink-soft">
          Ainda em dúvida?{' '}
          <a
            href="#blog"
            className="border-b-[1.5px] border-orange font-bold text-orange no-underline"
          >
            Leia "Cheguei sem ideia": 3 histórias de quem participou →
          </a>
        </div>

        {/* Bloco intraempreendedor */}
        <div
          className="mt-12 rounded-xl border-l-[3px] border-orange bg-paper-warm p-10 max-md:p-7"
          aria-labelledby="intra-title"
        >
          <div className="mb-3 font-display text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-[var(--orange-deep)]">
            {INTRA.eyebrow}
          </div>
          <h3
            id="intra-title"
            className="mb-5 max-w-[24ch] font-display text-[clamp(1.375rem,2.5vw,1.75rem)] font-extrabold leading-tight tracking-[-0.018em] text-ink"
          >
            {INTRA.title}
          </h3>
          <p className="mb-5 font-body text-base leading-[1.55] text-ink-soft">{INTRA.intro}</p>
          <ul className="mb-7 grid grid-cols-2 gap-x-8 gap-y-3.5 max-md:grid-cols-1">
            {INTRA.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-display text-[0.9375rem] font-semibold leading-[1.4] text-ink"
              >
                <span className="shrink-0 font-extrabold text-orange">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p
            className="border-t border-[var(--line)] pt-6 font-display text-[clamp(1.0625rem,2vw,1.25rem)] font-extrabold tracking-[-0.01em] text-ink [&_em]:not-italic [&_em]:text-orange"
            dangerouslySetInnerHTML={{ __html: INTRA.closer }}
          />
        </div>
      </div>
    </section>
  );
}

// ════════════════ COMO É ESTAR LÁ (mosaico) ════════════════
export function Vibe() {
  // Classes de posicionamento do mosaico assimétrico
  const spans = [
    'col-span-2 row-span-2',
    'col-span-2 row-span-1',
    'col-span-2 row-span-1',
    'col-span-2 row-span-1',
    'col-span-2 row-span-2',
    'col-span-3 row-span-1',
    'col-span-3 row-span-1',
  ];

  return (
    <section id="vibe" className="bg-paper py-36" aria-labelledby="vibe-title">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <div className="mb-14 max-w-[720px]">
          <h2
            id="vibe-title"
            className="max-w-[18ch] font-display text-[clamp(2.25rem,5vw,3.5rem)] font-black leading-[1.05] tracking-[-0.025em] text-ink"
          >
            Não dá pra explicar.
            <br />
            <em className="not-italic text-orange">Dá pra mostrar.</em>
          </h2>
          <p className="mt-5 max-w-[48ch] font-body text-[1.125rem] leading-[1.55] text-ink-soft">
            54 horas no CETISA, em Timbó. Pessoas que não se conheciam na sexta, construindo
            coisas juntas no domingo. Edição 2025.
          </p>
        </div>

        {/* Mosaico */}
        <div className="grid auto-rows-[140px] grid-cols-6 gap-3 max-md:auto-rows-[120px] max-md:grid-cols-2">
          {VIBE_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`relative flex items-end overflow-hidden rounded-[10px] bg-gradient-to-br from-paper-warmer to-paper p-4 ${
                spans[i]
              } ${
                // No mobile, fotos 1 e 5 ocupam destaque
                i === 0 || i === 4
                  ? 'max-md:col-span-2 max-md:row-span-2'
                  : 'max-md:col-span-1 max-md:row-span-1'
              }`}
            >
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="absolute inset-0 z-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-3 z-0 flex items-center justify-center rounded-md border border-dashed border-[var(--line)] text-center font-display text-[0.6875rem] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-ink-faint">
                  {photo.placeholder}
                </div>
              )}
              {/* Gradiente para legibilidade da legenda */}
              <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-black/50" />
              <span
                className={`relative z-[2] font-display text-[0.6875rem] font-bold uppercase leading-[1.3] tracking-[0.08em] ${
                  photo.src ? 'text-white' : 'text-white/60'
                }`}
              >
                {photo.caption}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 font-display text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-faint">
          <span className="h-px w-6 bg-[var(--line)]" />
          Fotos da edição 2025 · Timbó/SC
        </div>
      </div>
    </section>
  );
}
