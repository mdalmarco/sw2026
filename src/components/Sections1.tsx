import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ACTIVITY_STATS, GLOBAL_STATS, SCHEDULE_DAYS } from '../data/content';

// ════════════════ ACTIVITY STRIP ════════════════
export function ActivityStrip() {
  return (
    <section className="border-y border-[var(--line-soft)] bg-paper py-7" aria-label="Última edição">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <span className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-faint">
            Última edição em números
          </span>
          <div className="flex flex-wrap gap-8">
            {ACTIVITY_STATS.map((s) => (
              <span
                key={s.label}
                className="flex items-baseline gap-1.5 font-display text-[0.8125rem] text-ink-soft"
              >
                <strong className="text-[1.0625rem] font-extrabold text-ink">{s.value}</strong>
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════ O QUE É ════════════════
export function WhatIs() {
  return (
    <section id="o-que-e" className="bg-paper-warm py-20" aria-labelledby="what-is-title">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <SectionHeader
          id="what-is-title"
          eyebrow="O evento"
          title={
            <>
              Um fim de semana para experimentar, na prática, o que é{' '}
              <em className="not-italic text-orange">empreender.</em>
            </>
          }
        />
        <div className="grid grid-cols-[1.2fr_1fr] gap-16 max-md:grid-cols-1 max-md:gap-8">
          <div className="space-y-4">
            <p className="text-[1.0625rem] leading-[1.65] text-ink-soft">
              O <strong className="font-bold text-ink">Startup Weekend</strong> é uma imersão de
              54 horas onde pessoas com diferentes formações se juntam para criar um produto em
              um fim de semana — partindo do zero.
            </p>
            <p className="text-[1.0625rem] leading-[1.65] text-ink-soft">
              Você vai vivenciar o ciclo completo de criação de uma startup:{' '}
              <strong className="font-bold text-ink">
                identificar uma oportunidade, formar um time, validar com clientes, construir um
                produto e apresentar para jurados
              </strong>{' '}
              — tudo em um fim de semana, no{' '}
              <strong className="font-bold text-ink">Vale do Itajaí</strong>.
            </p>
            <p className="text-[1.0625rem] leading-[1.65] text-ink-soft">
              Criado pela <strong className="font-bold text-ink">Techstars</strong> e presente em
              mais de 150 países, é a forma mais rápida e acessível de descobrir, na prática, se
              empreender é pra você.
            </p>
          </div>
          <div className="grid gap-4">
            {GLOBAL_STATS.map((s) => (
              <div
                key={s.number}
                className="grid grid-cols-[auto_1fr] items-center gap-5 rounded-[10px] bg-paper px-6 py-5"
              >
                <div className="font-display text-[2.25rem] font-black leading-none tracking-[-0.02em] text-orange">
                  {s.number}
                </div>
                <div className="font-body text-[0.9375rem] leading-[1.45] text-ink-soft">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════ COMO FUNCIONA ════════════════
export function HowItWorks() {
  const [activeDay, setActiveDay] = useState(0);
  const day = SCHEDULE_DAYS[activeDay];

  return (
    <section id="como-funciona" className="py-24 overflow-x-hidden" aria-labelledby="how-title">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <SectionHeader
          id="how-title"
          eyebrow="As 54 horas, hora a hora"
          title={
            <>
              O que acontece em cada momento do{' '}
              <em className="not-italic text-orange">fim de semana.</em>
            </>
          }
          intro={
            <>
              O cronograma do <strong>Startup Weekend Timbó</strong> é desenhado para te levar do
              zero ao pitch sem precisar saber nada antes de chegar.
            </>
          }
        />

        {/* Tabs por dia */}
        <div
          className="mb-8 inline-flex gap-1 rounded-[10px] bg-paper-warm p-1 max-md:w-full max-md:overflow-x-auto max-md:max-w-[calc(100vw-40px)]"
          role="tablist"
        >
          {SCHEDULE_DAYS.map((d, i) => (
            <button
              key={d.label}
              role="tab"
              aria-selected={activeDay === i}
              onClick={() => setActiveDay(i)}
              className={`whitespace-nowrap rounded-[7px] px-5 py-2.5 font-display text-[0.8125rem] font-bold uppercase tracking-[0.06em] transition-all ${
                activeDay === i
                  ? 'bg-paper text-ink shadow-[0_1px_3px_oklch(0_0_0_/_0.06)]'
                  : 'bg-transparent text-ink-muted'
              }`}
            >
              {d.label}{' '}
              <span
                className={`text-[0.6875rem] font-medium ${
                  activeDay === i ? 'text-orange' : 'text-ink-muted'
                }`}
              >
                · {d.date}
              </span>
            </button>
          ))}
        </div>

        {/* Nota do dia */}
        <p className="mb-8 font-body text-[1.0625rem] italic leading-[1.5] text-ink-soft">
          {day.note}
        </p>

        {/* Timeline do dia ativo */}
        <div className="grid">
          {day.items.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[140px_1fr] gap-10 border-t border-[var(--line)] py-5 max-md:grid-cols-[88px_1fr] max-md:gap-5 ${
                i === day.items.length - 1 ? 'border-b' : ''
              } ${
                row.keyMoment
                  ? '-ml-4 rounded-l bg-gradient-to-r from-[var(--orange-soft)] to-transparent pl-4'
                  : ''
              }`}
            >
              <div className="font-display text-[1.0625rem] font-extrabold uppercase tracking-[0.04em] text-ink">
                {row.time}
              </div>
              <h3 className="flex flex-wrap items-center gap-2.5 font-display text-[1.0625rem] font-bold leading-tight text-ink">
                {row.title}
                {'chip' in row && row.chip && (
                  <span className="rounded bg-[var(--orange-soft)] px-2 py-[3px] font-display text-[0.625rem] font-extrabold uppercase tracking-[0.12em] text-orange">
                    {row.chip}
                  </span>
                )}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
