import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { BLOG_POSTS, TAKEAWAYS, MENTORS } from '../data/content';

// ════════════════ BLOG ════════════════
export function Blog() {
  return (
    <section id="blog" className="bg-paper-warm py-24" aria-labelledby="blog-title">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <SectionHeader
          id="blog-title"
          eyebrow="Blog"
          title={
            <>
              Conteúdo para{' '}
              <em className="not-italic text-orange">quem está chegando agora.</em>
            </>
          }
          intro="Histórias de quem já passou pelo SW, dicas para se preparar e referências sobre empreendedorismo no Vale do Itajaí."
        />
        <div className="mt-8 grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.title}
              className="cursor-pointer overflow-hidden rounded-xl bg-paper transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_oklch(0_0_0_/_0.06)]"
            >
              <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-paper-warm to-paper-warmer font-display text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-ink-faint">
                [ Imagem do post ]
              </div>
              <div className="p-6">
                <div className="mb-3 font-display text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-orange">
                  {post.meta}
                </div>
                <h3 className="mb-2 font-display text-[1.0625rem] font-bold leading-[1.3] text-ink">
                  {post.title}
                </h3>
                <p className="font-body text-[0.9375rem] leading-[1.5] text-ink-muted">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════ O QUE VOCÊ LEVA ════════════════
export function Takeaways() {
  return (
    <section className="bg-paper py-32" aria-labelledby="takeaway-title">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <SectionHeader
          id="takeaway-title"
          eyebrow="Ao final do domingo"
          title={
            <>
              Você sai com mais do que <em className="not-italic text-orange">chegou.</em>
            </>
          }
        />
        <div className="mt-8 grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {TAKEAWAYS.map((t) => (
            <div key={t.num} className="rounded-xl bg-paper-warm p-8">
              <span className="mb-4 block font-display text-[0.75rem] font-black tracking-[0.15em] text-orange">
                {t.num}
              </span>
              <h3 className="mb-3 font-display text-[1.1875rem] font-bold leading-[1.25]">
                {t.title}
              </h3>
              <p className="font-body text-[0.9375rem] leading-[1.6] text-ink-soft">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════ MENTORES ════════════════
export function Mentors() {
  const [activeTab, setActiveTab] = useState(1); // 0=facilitador, 1=mentores, 2=jurados
  const tabs = [
    { label: 'Facilitador', count: '· em breve' },
    { label: 'Mentores', count: '· 12+' },
    { label: 'Jurados', count: '· em breve' },
  ];

  return (
    <section id="mentores" className="bg-paper-warm py-20" aria-labelledby="mentors-title">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5">
        <SectionHeader
          id="mentors-title"
          eyebrow="Quem está com você"
          title={
            <>
              Quem <em className="not-italic text-orange">já trilhou</em> esse caminho.
            </>
          }
        />
        <p className="-mt-8 mb-8 max-w-[56ch] font-body text-[1.0625rem] leading-[1.55] text-ink-soft">
          Durante o fim de semana, você constrói com o apoio de{' '}
          <strong className="font-semibold text-ink">
            pessoas que fazem isso todos os dias
          </strong>
          . Empreendedores, executivos e especialistas do Vale do Itajaí e do Brasil —
          voluntários para te acompanhar nas 54 horas do{' '}
          <strong className="font-semibold text-ink">Startup Weekend Timbó</strong>.
        </p>

        {/* Tabs */}
        <div className="mb-10 flex gap-2 border-b border-[var(--line)]" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              role="tab"
              aria-selected={activeTab === i}
              onClick={() => setActiveTab(i)}
              className={`-mb-px border-b-2 px-6 py-3.5 font-display text-[0.875rem] font-bold uppercase tracking-[0.05em] transition-colors ${
                activeTab === i
                  ? 'border-orange text-orange'
                  : 'border-transparent text-ink-muted hover:text-ink-soft'
              }`}
            >
              {tab.label}
              <span className="ml-1.5 font-display text-[0.6875rem] font-semibold text-ink-muted">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Conteúdo da tab */}
        {activeTab === 1 ? (
          <>
            <div className="mb-8 grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {MENTORS.map((m) => (
                <article
                  key={m.name}
                  className="grid grid-cols-[88px_1fr] items-start gap-5 rounded-xl bg-paper p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_oklch(0_0_0_/_0.06)] max-md:grid-cols-[72px_1fr] max-md:gap-3.5 max-md:p-4"
                >
                  <div className="h-[88px] w-[88px] overflow-hidden rounded-full bg-paper-warm max-md:h-[72px] max-md:w-[72px]">
                    <img
                      src={m.photo}
                      alt={`Foto de ${m.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="font-display text-[0.75rem] font-bold uppercase tracking-[0.05em] text-blue">
                      {m.role}
                    </div>
                    <div className="font-display text-base font-bold leading-tight text-ink">
                      {m.name}
                    </div>
                    <p className="mt-1 font-body text-[0.875rem] leading-[1.45] text-ink-soft">
                      {m.spec}
                    </p>
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 font-display text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-ink-muted no-underline transition-colors hover:text-orange"
                    >
                      <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[3px] bg-ink-muted font-display text-[0.625rem] font-extrabold text-paper">
                        in
                      </span>
                      LinkedIn
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="rounded-xl border border-dashed border-[var(--line)] bg-paper px-8 py-12 text-center">
              <div className="mb-3 font-display text-2xl text-ink-faint">↗</div>
              <div className="mb-1.5 font-display text-[0.9375rem] font-bold text-ink-soft">
                Mais mentores serão anunciados em breve
              </div>
              <div className="font-body text-[0.875rem] text-ink-muted">
                Acompanhe nosso Instagram{' '}
                <a href="#" className="font-semibold text-orange no-underline">
                  @sw.timbo
                </a>{' '}
                para novidades
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-dashed border-[var(--line)] bg-paper px-8 py-12 text-center">
            <div className="mb-3 font-display text-2xl text-ink-faint">↗</div>
            <div className="mb-1.5 font-display text-[0.9375rem] font-bold text-ink-soft">
              {tabs[activeTab].label} será anunciado em breve
            </div>
            <div className="font-body text-[0.875rem] text-ink-muted">
              Acompanhe nosso Instagram para novidades
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
