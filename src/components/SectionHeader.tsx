import type { ReactNode } from 'react';

/** Eyebrow + título de seção padrão */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  id,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  center?: boolean;
}) {
  return (
    <>
      <div className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</div>
      <h2
        id={id}
        className={`mb-4 max-w-[22ch] font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.022em] text-ink ${
          center ? 'mx-auto' : ''
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mb-12 max-w-[52ch] font-body text-[1.0625rem] leading-[1.6] text-ink-soft ${
            center ? 'mx-auto' : ''
          }`}
        >
          {intro}
        </p>
      )}
    </>
  );
}
