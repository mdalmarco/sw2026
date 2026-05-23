import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, PRICING } from '../data/content';
import Nav from '../components/Nav';
import { MobileStickyCTA, Footer } from '../components/Sections5';
import AureaGlow from '../components/AureaGlow';
import { useEffect } from 'react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <>
        <AureaGlow />
        <Nav />
        <main className="mx-auto max-w-[720px] px-8 py-32 text-center max-md:px-5">
          <h1 className="mb-4 font-display text-3xl font-black text-ink">Post não encontrado</h1>
          <p className="mb-8 font-body text-ink-muted">O artigo que você procura não existe ou foi movido.</p>
          <Link to="/" className="font-display text-sm font-bold uppercase tracking-wider text-orange hover:underline">
            ← Voltar ao site
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AureaGlow />
      <Nav />

      <main className="pb-0 max-md:pb-20">
        <article className="mx-auto max-w-[720px] px-8 pb-24 pt-16 max-md:px-5">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-display text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-ink-faint">
              <li>
                <Link to="/" className="transition-colors hover:text-orange">Início</Link>
              </li>
              <li aria-hidden="true">·</li>
              <li>
                <Link to="/#blog" className="transition-colors hover:text-orange">Blog</Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-ink-muted">{post.title.slice(0, 40)}…</li>
            </ol>
          </nav>

          {/* Meta */}
          <div className="mb-4 font-display text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-orange">
            {post.meta}
          </div>

          {/* Título */}
          <h1 className="mb-8 font-display text-[clamp(1.5rem,4vw,2.25rem)] font-black leading-[1.15] tracking-[-0.01em] text-ink">
            {post.title}
          </h1>

          {/* Imagem */}
          {post.image && (
            <div className="mb-10 overflow-hidden rounded-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full object-cover [mix-blend-mode:multiply]"
              />
            </div>
          )}

          {/* Corpo */}
          <div className="space-y-5">
            {(post.body ?? []).map((block: string, i: number) =>
              block.startsWith('## ') ? (
                <h2
                  key={i}
                  className="pt-6 font-display text-[1.25rem] font-bold text-ink"
                >
                  {block.replace('## ', '')}
                </h2>
              ) : (
                <p key={i} className="font-body text-[1.0625rem] leading-[1.75] text-ink-soft">
                  {block}
                </p>
              )
            )}
          </div>

          {/* CTA de fechamento */}
          <div className="mt-16 rounded-xl border border-[var(--line-soft)] bg-paper-warm p-8 text-center">
            <p className="mb-4 font-display text-[1.0625rem] font-bold text-ink">
              O Startup Weekend Timbó 2026 acontece de 14 a 16 de agosto.
            </p>
            <a
              href={PRICING.symplaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-orange px-8 py-3 font-display text-sm font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-orange-dark"
            >
              Quero participar →
            </a>
          </div>

          {/* Voltar */}
          <div className="mt-10 text-center">
            <Link
              to="/#blog"
              className="font-display text-[0.8125rem] font-bold uppercase tracking-wider text-ink-muted transition-colors hover:text-orange"
            >
              ← Outros artigos
            </Link>
          </div>
        </article>
      </main>

      <MobileStickyCTA />
      <Footer />
    </>
  );
}
