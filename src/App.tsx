import AureaGlow from './components/AureaGlow';
import Nav from './components/Nav';
import Hero from './components/Hero';
import { ActivityStrip, WhatIs, HowItWorks } from './components/Sections1';
import { QuoteBreak, ForWho, Vibe } from './components/Sections2';
import { Blog, Takeaways, Mentors } from './components/Sections3';
import { Venue, Past, Pricing } from './components/Sections4';
import { Sponsors, FAQ, FinalCTA, MobileStickyCTA, Footer } from './components/Sections5';

export default function App() {
  return (
    <>
      {/* Efeito áurea que segue o cursor */}
      <AureaGlow />

      <Nav />

      <main className="pb-0 max-md:pb-20">
        <Hero />
        <ActivityStrip />
        <WhatIs />
        <HowItWorks />

        {/* Quote-break 1 — individual */}
        <QuoteBreak
          variant="warm"
          eyebrow="Sexta-feira · 21h32"
          context="O time que você nem conhecia ainda agora é o seu time."
        >
          Você acabou de votar numa ideia. Em{' '}
          <span className="bg-gradient-to-b from-transparent from-[65%] to-[var(--orange-soft)] to-[65%]">
            2 minutos
          </span>
          , ela vira <em className="not-italic text-orange">o seu projeto.</em>
        </QuoteBreak>

        <ForWho />
        <Vibe />
        <Blog />
        <Takeaways />

        {/* Quote-break 2 — coletivo */}
        <QuoteBreak
          variant="deep"
          eyebrow="Em 54 horas"
          context="É isso que acontece quando você bota gente curiosa na mesma sala."
        >
          Sexta de manhã:{' '}
          <span className="bg-gradient-to-b from-transparent from-[65%] to-[var(--orange-soft)] to-[65%]">
            50 estranhos.
          </span>
          <br />
          Domingo à noite: <em className="not-italic text-orange">7 times.</em>
        </QuoteBreak>

        <Mentors />
        <Venue />
        <Past />
        <Pricing />
        <Sponsors />
        <FAQ />
        <FinalCTA />
      </main>

      <MobileStickyCTA />
      <Footer />
    </>
  );
}
