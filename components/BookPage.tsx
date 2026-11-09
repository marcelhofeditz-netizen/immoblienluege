import { content, MAIL, SITE, type Lang } from '@/lib/content'
import { Cover } from './Cover'
import { DocChat } from './DocChat'

const GOLD = '#C9A24D'

export function BookPage({ lang }: { lang: Lang }) {
  const t = content[lang]
  const mail = `mailto:${MAIL}?subject=${encodeURIComponent(t.finale.mailSubject)}`
  const imprint = lang === 'en' ? 'https://www.dr-hofeditz.de/impressum' : 'https://www.dr-hofeditz.de/impressum'

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
  const bookLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'Psychologie beim Immobilienkauf',
    alternateName: lang === 'en' ? ['Die Immobilienlüge', 'The Property Lie'] : ['Die Immobilienlüge'],
    alternativeHeadline: 'Was Makler wissen, aber Käufer nicht',
    author: { '@type': 'Person', name: 'Dr. Marcel Hofeditz', url: 'https://www.dr-hofeditz.de' },
    publisher: { '@type': 'Organization', name: 'Econ (Ullstein Buchverlage)' },
    inLanguage: 'de',
    bookFormat: 'https://schema.org/Paperback',
    numberOfPages: 220,
    datePublished: '2027',
    url: SITE[lang],
    image: `${SITE[lang]}/img/cover.jpg`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="grain" aria-hidden />

      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[5vw] py-5" style={{ background: 'linear-gradient(180deg,#0B0B0Bee,#0B0B0B00)' }}>
        <a href="#top" className="whitespace-nowrap text-[0.78rem] font-bold uppercase tracking-[0.28em] text-text-primary">
          {lang === 'en' ? 'The Property Lie' : 'Die Immobilienlüge'}
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {[
            ['#buch', t.nav.book],
            ['#fallen', t.nav.traps],
            ['#inhalt', t.nav.chapters],
            ['#doc', t.nav.doc],
            ['#autor', t.nav.author],
          ].map(([h, l]) => (
            <li key={h}>
              <a href={h} className="text-[0.72rem] uppercase tracking-[0.14em] text-grey-secondary transition hover:text-text-primary">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={t.nav.langHref} className="border border-[#333] px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.14em] text-grey-secondary hover:text-text-primary">
            {t.nav.lang}
          </a>
          <a href={mail} className="hidden bg-[#F6F6F6] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-black sm:inline-block">
            {t.nav.cta}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-20 h-[58svh] md:inset-y-0 md:h-auto">
          <video className="h-full w-full object-cover" style={{ objectPosition: '72% 50%' }} src="/img/hero.mp4" poster="/img/brain-hero.webp" autoPlay muted loop playsInline aria-hidden />
        </div>
        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(90deg,#0B0B0B 0%,#0B0B0Bdd 30%,#0B0B0B55 55%,#0B0B0B00 75%),linear-gradient(0deg,#0B0B0B 0%,#0B0B0B00 40%)' }} />
        <div className="absolute inset-0 -z-10 md:hidden" style={{ background: 'linear-gradient(0deg,#0B0B0B 0%,#0B0B0B 46%,#0B0B0B00 62%)' }} />
        <div className="mx-auto w-full max-w-[1280px] px-[5vw] pb-20 pt-[46svh] md:pt-40">
          <div className="max-w-[46rem]">
              <p className="kicker mb-6" style={{ color: GOLD }}>{t.hero.kicker}</p>
              <h1 className="display text-text-primary" style={{ fontSize: 'clamp(3rem, 7.2vw, 7rem)', lineHeight: 1 }}>
                {t.hero.title.map((l) => (
                  <span key={l} className="block">{l}{' '}</span>
                ))}
              </h1>
              <p className="mt-8 text-[clamp(1.05rem,1.8vw,1.45rem)] font-bold text-text-primary">
                „{t.hero.book}“ <span className="font-normal text-grey-secondary">– {t.hero.subtitle}</span>
              </p>
              <p className="mt-5 max-w-[38rem] text-[clamp(1rem,1.4vw,1.15rem)] leading-[1.7] text-[#d6d6d6]">{t.hero.lead}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={mail} className="btn-solid-x">{t.hero.cta1}</a>
                <a href="#doc" className="btn-ghost-x">{t.hero.cta2}</a>
              </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden whitespace-nowrap border-y border-grey-light" aria-hidden>
        <div className="ticker-track">
          {[...t.ticker, ...t.ticker].map((w, i) => (
            <span key={i}>{w}</span>
          ))}
        </div>
      </div>

      {/* DAS BUCH */}
      <section id="buch" className="scroll-mt-16 px-[5vw] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <div className="mx-auto w-[78%] max-w-[420px] md:w-full">
            <Cover />
          </div>
          <div>
            <p className="kicker mb-5" style={{ color: GOLD }}>{t.book.kicker}</p>
            <h2 className="h-section mb-6 uppercase text-text-primary" style={{ fontSize: 'clamp(2.2rem, 4.8vw, 4.2rem)' }}>{t.book.title}</h2>
            <p className="mb-10 max-w-[36rem] text-[1.08rem] leading-[1.8] text-[#cfcfcf]">{t.book.text}</p>
            <dl className="grid max-w-[36rem] grid-cols-2 gap-x-8 gap-y-5 border-t border-grey-light pt-8">
              {t.book.facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-grey-secondary">{k}</dt>
                  <dd className="mt-1 text-[1rem] font-bold text-text-primary">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* THESE */}
      <section className="border-t border-grey-light px-[5vw] py-28 md:py-40">
        <div className="mx-auto max-w-[1200px]">
          <p className="kicker mb-8">{t.thesis.kicker}</p>
          <p className="display text-text-primary" style={{ fontSize: 'clamp(2.3rem, 6.4vw, 6rem)' }}>
            {t.thesis.lines.map((l, i) => (
              <span key={l} className="block" style={i >= 2 ? { color: GOLD } : undefined}>
                {l}{' '}
              </span>
            ))}
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <p className="text-[1.08rem] leading-[1.8] text-[#cfcfcf]">{t.thesis.text}</p>
            <blockquote className="border-l-2 pl-6 text-[1.3rem] font-bold leading-snug text-text-primary" style={{ borderColor: GOLD }}>
              „{t.thesis.quote}“
              <span className="mt-4 block text-[0.72rem] font-normal uppercase tracking-[0.24em] text-grey-secondary">Dr. Marcel Hofeditz</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FALLEN */}
      <section id="fallen" className="scroll-mt-16 border-t border-grey-light px-[5vw] py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="kicker mb-5">{t.traps.kicker}</p>
          <h2 className="h-section mb-14 max-w-[18ch] uppercase text-text-primary" style={{ fontSize: 'clamp(2.1rem, 4.6vw, 4rem)' }}>{t.traps.title}</h2>
          <div className="space-y-px bg-grey-light">
            {t.traps.items.map((it, i) => (
              <article key={it.t} className="group grid items-stretch bg-[#0B0B0B] md:grid-cols-2">
                <div className={`relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[360px] ${i % 2 ? 'md:order-last' : ''}`}>
                  <img src={it.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-14">
                  <p className="kicker mb-4" style={{ color: GOLD }}>{String(i + 1).padStart(2, '0')} · {it.k}</p>
                  <h3 className="h-section mb-5 uppercase text-text-primary" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)' }}>{it.t}</h3>
                  <p className="max-w-[34rem] text-[1.05rem] leading-[1.75] text-[#cfcfcf]">{it.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-grey-light px-[5vw] py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-10 md:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.l}>
              <p className="font-extrabold leading-none tracking-[-0.03em] text-text-primary" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)' }}>{s.n}</p>
              <p className="mt-3 text-[0.72rem] uppercase tracking-[0.18em] text-grey-secondary">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AKTE + INHALT */}
      <section id="inhalt" className="scroll-mt-16 px-[5vw] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-20 lg:grid-cols-2">
          <div>
            <p className="kicker mb-5">{t.acts.kicker}</p>
            <h2 className="h-section mb-12 uppercase text-text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>{t.acts.title}</h2>
            <ol className="space-y-8">
              {t.acts.items.map((a, i) => (
                <li key={a.t} className="flex gap-6">
                  <span className="text-[2.4rem] font-extrabold leading-none" style={{ color: GOLD }}>{['I', 'II', 'III', 'IV', 'V'][i]}</span>
                  <div>
                    <p className="text-[1.15rem] font-bold text-text-primary">{a.t}</p>
                    <p className="mt-1 text-[0.98rem] leading-relaxed text-grey-secondary">{a.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="kicker mb-5">{t.chapters.kicker}</p>
            <h2 className="h-section mb-12 uppercase text-text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>{t.chapters.title}</h2>
            <ul className="border-t border-grey-light">
              {t.chapters.items.map(([n, c]) => (
                <li key={n} className="flex items-baseline gap-6 border-b border-grey-light py-4">
                  <span className="w-8 text-[0.8rem] font-bold tracking-[0.1em] text-grey-secondary">{n}</span>
                  <span className="text-[1.05rem] font-bold text-text-primary">{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.98rem] leading-relaxed text-grey-secondary">{t.chapters.more}</p>
          </div>
        </div>
      </section>

      {/* DOC */}
      <section id="doc" className="scroll-mt-16 border-t border-grey-light px-[5vw] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="kicker mb-5" style={{ color: GOLD }}>{t.doc.kicker}</p>
            <h2 className="display mb-8 text-text-primary" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>{t.doc.title}</h2>
            <p className="max-w-[30rem] text-[1.1rem] leading-[1.75] text-[#cfcfcf]">{t.doc.text}</p>
          </div>
          <DocChat lang={lang} t={t.doc} />
        </div>
      </section>

      {/* AUTOR */}
      <section id="autor" className="relative isolate scroll-mt-16 overflow-hidden border-t border-grey-light">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[420px]">
            <img src="/img/uni.webp" alt="Dr. Marcel Hofeditz" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center px-[5vw] py-20 md:px-16">
            <p className="kicker mb-5">{t.author.kicker}</p>
            <h2 className="display mb-4 text-text-primary" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.6rem)' }}>
              {t.author.name.map((l) => (
                <span key={l} className="block">{l}{' '}</span>
              ))}
            </h2>
            <p className="mb-8 text-[0.75rem] uppercase tracking-[0.2em]" style={{ color: GOLD }}>{t.author.role}</p>
            {t.author.text.map((p) => (
              <p key={p} className="mb-4 max-w-[34rem] text-[1.02rem] leading-[1.75] text-[#cfcfcf]">{p}</p>
            ))}
            <a href={t.author.href} className="btn-ghost-x mt-6 self-start">{t.author.cta} &rarr;</a>
          </div>
        </div>
      </section>

      {/* PLATTFORM */}
      <section className="border-t border-grey-light px-[5vw] py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="kicker mb-5">{t.platform.kicker}</p>
          <h2 className="h-section mb-6 max-w-[20ch] uppercase text-text-primary" style={{ fontSize: 'clamp(2rem, 4.4vw, 3.8rem)' }}>{t.platform.title}</h2>
          <p className="mb-12 max-w-[40rem] text-[1.05rem] leading-[1.75] text-[#cfcfcf]">{t.platform.text}</p>
          <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {t.platform.stats.map((s) => (
              <div key={s.l} className="border-t border-grey-light pt-5">
                <p className="text-[2.6rem] font-extrabold leading-none tracking-[-0.03em] text-text-primary">{s.n}</p>
                <p className="mt-2 text-[0.72rem] uppercase tracking-[0.18em] text-grey-secondary">{s.l}</p>
              </div>
            ))}
          </div>
          <a href={t.platform.href} className="btn-solid-x">{t.platform.cta} &rarr;</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-grey-light px-[5vw] py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="kicker mb-5">{t.faq.kicker}</p>
          <h2 className="h-section mb-12 uppercase text-text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>{t.faq.title}</h2>
          {t.faq.items.map((f) => (
            <details key={f.q} className="group border-b border-grey-light py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.1rem] font-bold text-text-primary">
                {f.q}
                <span className="text-2xl transition group-open:rotate-45" style={{ color: GOLD }}>+</span>
              </summary>
              <p className="mt-4 text-[1rem] leading-[1.75] text-[#cfcfcf]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINALE */}
      <section className="relative isolate overflow-hidden border-t border-grey-light px-[5vw] py-32 text-center">
        <img src="/img/cover-art.webp" alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at center,#0B0B0B66,#0B0B0B 75%)' }} />
        <p className="kicker mb-6" style={{ color: GOLD }}>{t.finale.kicker}</p>
        <h2 className="display mx-auto mb-8 max-w-[14ch] text-text-primary" style={{ fontSize: 'clamp(2.6rem, 7vw, 6.4rem)' }}>{t.finale.title}</h2>
        <p className="mx-auto mb-10 max-w-[34rem] text-[1.08rem] leading-[1.7] text-[#d6d6d6]">{t.finale.text}</p>
        <a href={mail} className="btn-solid-x">{t.finale.cta}</a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-grey-light px-[5vw] py-10 text-[0.78rem] text-grey-secondary">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-4 md:flex-row">
          <p>© 2026 Dr. Marcel Hofeditz · Dr. Hofeditz Real Estate GmbH, Hamburg · {t.footer.publisher}</p>
          <div className="flex gap-6">
            <a href={imprint} className="hover:text-text-primary">{t.footer.imprint}</a>
            <a href="https://www.dr-hofeditz.de/datenschutz" className="hover:text-text-primary">{t.footer.privacy}</a>
            <a href="https://www.dr-hofeditz.de" className="hover:text-text-primary">dr-hofeditz.de</a>
          </div>
        </div>
      </footer>
    </>
  )
}
