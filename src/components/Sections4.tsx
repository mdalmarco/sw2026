import { SectionHeader } from './SectionHeader';
import { EVENT, VENUE_FEATURES, PAST_STATS, TESTIMONIALS, PRICING } from '../data/content';

// ════════════════ LOCAL ════════════════
export function Venue() {
  return (
    <section className="bg-paper py-20" aria-labelledby="venue-title">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <SectionHeader
          id="venue-title"
          eyebrow="Onde acontece"
          title={
            <>
              No coração de Timbó, com toda a estrutura para os{' '}
              <em className="not-italic text-orange">3 dias.</em>
            </>
          }
        />
        <div className="grid grid-cols-[1fr_1.2fr] items-center gap-16 max-md:grid-cols-1 max-md:gap-8">
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <img
              src="/images/Fachada_Cetisa.jpg"
              alt="Fachada do CETISA Unidade Centro"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="mb-2 font-display text-2xl font-extrabold">{EVENT.venue.name}</h3>
            <p className="mb-6 font-body text-base leading-[1.5] text-ink-soft">
              {EVENT.venue.address}
              <br />
              {EVENT.venue.city}
            </p>
            <ul className="grid gap-3">
              {VENUE_FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 text-[0.9375rem] leading-[1.4] text-ink-soft before:font-display before:font-bold before:text-orange before:content-['→']"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════ EDIÇÕES ANTERIORES (testimonials) ════════════════
export function Past() {
  return (
    <section className="bg-paper-warm py-36" aria-labelledby="past-title">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <SectionHeader
          id="past-title"
          eyebrow="Quem já passou por aqui"
          title={
            <>
              A última edição em <em className="not-italic text-orange">números reais.</em>
            </>
          }
        />

        {/* Stats */}
        <div className="mb-16 grid grid-cols-4 gap-6 border-y border-[var(--line)] py-8 max-md:grid-cols-2">
          {PAST_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mb-1 font-display text-[2.75rem] font-black leading-none tracking-[-0.02em] text-orange">
                {s.num}
              </div>
              <div className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials — grid 2x2 com 4 cards */}
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="rounded-xl bg-paper p-8">
              <p className="mb-6 font-body text-[1.0625rem] italic leading-[1.55] text-ink">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-paper-warmer to-paper-warm">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={`Foto de ${t.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-[0.75rem] font-bold text-ink-faint">
                      {t.name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="font-display text-[0.9375rem] font-bold text-ink">
                    {t.name}
                  </div>
                  <div className="font-body text-[0.8125rem] leading-[1.3] text-ink-muted">
                    {t.role}
                  </div>
                </div>
              </div>
              <div className="mt-5 border-t border-[var(--line-soft)] pt-5 font-display text-[0.75rem] font-bold uppercase tracking-[0.08em] text-orange">
                → {t.result}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════ INSCRIÇÕES ════════════════
export function Pricing() {
  const pct = Math.round((PRICING.vagasPreenchidas / PRICING.vagasTotais) * 100);

  return (
    <section id="inscricoes" className="bg-paper py-32" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-[980px] px-8 text-center max-md:px-5">
        <SectionHeader
          id="pricing-title"
          eyebrow="Vagas limitadas"
          center
          title={
            <>
              Garanta sua vaga e <em className="not-italic text-orange">se prepare.</em>
            </>
          }
          intro="Sua inscrição inclui acesso aos 3 dias do evento, todas as refeições, mentoria, materiais e certificado oficial Techstars — tudo o que você precisa para criar um produto em 54 horas."
        />

        {/* Barra de urgência */}
        <div className="mx-auto mb-6 max-w-[520px] rounded-[10px] bg-[var(--orange-soft)] px-6 py-4 text-left">
          <div className="mb-2.5 flex items-baseline justify-between font-display text-[0.8125rem] font-bold text-ink">
            <span>
              <strong className="font-extrabold text-[var(--orange-deep)]">
                {PRICING.vagasPreenchidas} vagas
              </strong>{' '}
              preenchidas
            </span>
            <span>de {PRICING.vagasTotais} totais</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-[3px] bg-[oklch(0.95_0.02_50)]">
            <div className="h-full rounded-[3px] bg-orange" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-2 font-display text-[0.75rem] tracking-[0.04em] text-ink-muted">
            Lote promocional encerra em {PRICING.loteEncerra} dias
          </div>
        </div>

        {/* Card de preço */}
        <div className="mx-auto max-w-[520px] rounded-2xl border-2 border-orange bg-paper p-10 text-left shadow-[0_8px_32px_oklch(0.5_0.12_40_/_0.12)]">
          <div className="mb-4 inline-block rounded bg-ink px-3 py-1.5 font-display text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-paper">
            {PRICING.tag}
          </div>
          <div className="mb-1 font-display text-[3.5rem] font-black leading-none tracking-[-0.025em] text-ink">
            <sup className="mr-1 text-[1.25rem] font-bold text-ink-muted">R$</sup>
            {PRICING.valor}
          </div>
          <div className="mb-8 text-[0.875rem] text-ink-muted">{PRICING.meta}</div>
          <ul className="mb-8 grid gap-2.5">
            {PRICING.includes.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[0.9375rem] leading-[1.4] text-ink-soft before:font-display before:font-extrabold before:text-orange before:content-['✓']"
              >
                {item}
              </li>
            ))}
          </ul>
          <a
            href={PRICING.symplaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-lg bg-orange py-[18px] text-center font-display text-[0.9375rem] font-extrabold uppercase tracking-[0.06em] text-white transition-colors hover:bg-orange-dark"
          >
            Inscreva-se via Sympla →
          </a>
        </div>
      </div>
    </section>
  );
}
