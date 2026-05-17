const NAV_LINKS = [
  { label: 'O evento', href: '#o-que-e' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Mentores', href: '#mentores' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-[oklch(0.98_0.005_80_/_0.95)] backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4 max-md:px-5"
        aria-label="Navegação principal"
      >
        <a
          href="#"
          className="font-display text-sm font-extrabold uppercase leading-tight tracking-[0.08em]"
        >
          Startup Weekend
          <br />
          <span className="text-orange">Timbó</span>
        </a>

        <ul className="flex gap-7 max-md:hidden">
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

        <a
          href="#inscricoes"
          className="rounded-md bg-orange px-5 py-2.5 font-display text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-white transition-all hover:-translate-y-px hover:bg-orange-dark max-md:hidden"
        >
          Inscreva-se
        </a>
      </nav>
    </div>
  );
}
