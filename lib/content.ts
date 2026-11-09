// Inhalte der Buchseite – Deutsch (immobilienluege.de) und Englisch (thepropertylie.com).
// Quelle: Exposé/Inhaltsübersicht von Dr. Marcel Hofeditz (alte Buchseite) und Econ-Programmangaben.

export type Lang = 'de' | 'en'

export const SITE = {
  de: 'https://www.immobilienluege.de',
  en: 'https://www.thepropertylie.com',
}

const OMP = (c: string) => `https://offmarketpool.de/?utm_source=immobilienluege&utm_medium=referral&utm_campaign=buch&utm_content=${c}`
const DRH = 'https://www.dr-hofeditz.de/?utm_source=immobilienluege&utm_medium=referral'
export const MAIL = 'info@dr-hofeditz.de'

export const content = {
  de: {
    meta: {
      title: 'Die Immobilienlüge – Psychologie beim Immobilienkauf | Dr. Marcel Hofeditz',
      description:
        'Das Buch zur Immobilienlüge: „Psychologie beim Immobilienkauf – Was Makler wissen, aber Käufer nicht“ von Dr. Marcel Hofeditz. Erscheint im Herbst 2027 bei Econ (Ullstein Buchverlage).',
    },
    nav: { book: 'Das Buch', traps: 'Die Fallen', chapters: 'Inhalt', doc: 'Frag Doc', author: 'Autor', cta: 'Vormerken', lang: 'EN', langHref: SITE.en },
    hero: {
      kicker: 'Das Buch · Econ · Herbst 2027',
      title: ['Die', 'Immobilien-', 'lüge.'],
      book: 'Psychologie beim Immobilienkauf',
      subtitle: 'Was Makler wissen, aber Käufer nicht',
      lead: 'Die größte Entscheidung deines Lebens triffst du nicht mit dem Taschenrechner. Sondern mit einem Gehirn, das sich systematisch selbst betrügt. Dieses Buch zeigt, wie – und wie du es merkst, bevor es teuer wird.',
      cta1: 'Erscheinen vormerken',
      cta2: 'Frag Doc',
    },
    ticker: ['Besitztumseffekt', 'Ankereffekt', 'Herdentrieb', 'Reziprozität', 'Projektionsfehler', 'Winner’s Curse', 'Opportunitätskosten', 'Trust, but Verify'],
    book: {
      kicker: 'Das Buch',
      title: 'Was Makler wissen, aber Käufer nicht.',
      text: 'Verhaltensökonomie, Spieltheorie und über 20 reale Fälle aus dem deutschen Immobilienmarkt – zusammengeführt zu einem Prüfmodell, mit dem du deine nächste Kaufentscheidung gegen dein eigenes Gehirn absicherst. Geschrieben von einem, der beide Seiten kennt: die Forschung und den Verhandlungstisch.',
      facts: [['Titel', 'Psychologie beim Immobilienkauf'], ['Verlag', 'Econ (Ullstein Buchverlage)'], ['Erscheinen', 'Herbst 2027'], ['Format', 'Klappenbroschur, ca. 220 Seiten']],
    },
    thesis: {
      kicker: 'Die These',
      lines: ['Immobilien sind', 'kein Markt aus Beton.', 'Sondern ein Markt', 'aus Psychologie.'],
      text: '„Betongold“, „Sachwert“, „Altersvorsorge“ – kaum ein Investment ist kulturell so tief verankert. Doch die reale Rendite nach Inflation, Zinsen und Instandhaltung erzählt eine andere Geschichte als die Grillparty. Nicht Fundamentaldaten entscheiden, wer kauft – sondern Anker, Herden und das Gefühl, dass Eigentum immer richtig ist.',
      quote: 'Immobilien gelten als Inbegriff von Sicherheit. Doch diese Sicherheit ist kein Naturgesetz. Sie ist ein Narrativ.',
    },
    traps: {
      kicker: 'Die Fallen',
      title: 'Fünf Denkfehler. Echte Fälle. Sechsstellige Summen.',
      items: [
        { img: '/img/brain-hero.webp', k: 'Kapitel 2', t: 'Der Besitztumseffekt', d: 'Was uns gehört, halten wir für mehr wert. Ein kognitiver Bias, der Preise um sechsstellige Beträge verzerrt: Klaus aus Stuttgart zahlte 180.000 € zu viel.' },
        { img: '/img/anker.webp', k: 'Kapitel 3', t: 'Der Ankereffekt', d: 'Der erste Preis, den du hörst, bestimmt alles danach. Julia und Tim zahlten am Ende 200.000 € zu viel – weil ein willkürlicher Erstpreis den Rahmen setzte.' },
        { img: '/img/herde.webp', k: 'Kapitel 4', t: 'Der Herdentrieb', d: 'Grillparty 2021: Alle kaufen, also kaufst du auch. Kollektiver Enthusiasmus fühlt sich an wie Marktanalyse. Er ist keine.' },
        { img: '/img/croissant.webp', k: 'Kapitel 5', t: 'Die Croissant-Falle', d: 'Ein Kaffee, ein Croissant, ein freundlicher Makler. Reziprozität ist das billigste Verkaufswerkzeug der Branche – und eines der wirksamsten.' },
        { img: '/img/pool.webp', k: 'Kapitel 6', t: 'Der Projektionsfehler', d: 'Sarah, Thomas und der Pool: Wir kaufen für das Leben, das wir heute im Kopf haben – nicht für das, das wir in zehn Jahren führen.' },
      ],
    },
    stats: [
      { n: '21', l: 'Kapitel' },
      { n: '20+', l: 'reale Fallbeispiele' },
      { n: '50', l: 'Jahre Renditeanalyse' },
      { n: '400+', l: 'wissenschaftliche Quellen' },
    ],
    acts: {
      kicker: 'Aufbau',
      title: 'Fünf Akte. Ein Urteil.',
      items: [
        { t: 'Das Narrativ vom Betongold', d: 'Wie ein Mythos entsteht und sich seit Jahrzehnten selbst verstärkt.' },
        { t: 'Psychologische Denkfehler', d: 'Besitztumseffekt, Anker, Herde, Reziprozität – die kognitiven Fallen beim Kauf.' },
        { t: 'Zinsmechanik & Marktlogik', d: 'Hebel, Finanzierung, Opportunitätskosten – warum wir systematisch falsch rechnen.' },
        { t: 'Systemische Lügen', d: 'Informationsasymmetrien, Greenwashing und die Akteure, die davon leben.' },
        { t: 'Struktur statt Glaube', d: 'Ein rationales Prüfmodell – und wie KI zur Kontrollinstanz wird.' },
      ],
    },
    chapters: {
      kicker: 'Inhalt',
      title: '21 Kapitel. Ein Prüfmodell.',
      items: [
        ['01', 'Willkommen im größten Selbstbetrug'],
        ['02', 'Der Besitztumseffekt'],
        ['03', 'Der Ankereffekt'],
        ['04', 'Der Herdentrieb'],
        ['05', 'Reziprozität & Croissant-Falle'],
        ['06', 'Der Projektionsfehler'],
        ['08', 'Die 50-Jahre-Rechnung'],
        ['15', 'Systemische Lügen'],
        ['20', 'Trust, but Verify'],
        ['21', 'KI als Kontrollinstanz'],
      ],
      more: 'Dazu Zinsmechanik, Opportunitätskosten, Spieltheorie am Verhandlungstisch, Greenwashing, Checklisten für Käufer und Verkäufer und fertige KI-Prompts.',
    },
    doc: {
      kicker: 'KI-Agent · Live',
      title: 'Frag Doc.',
      text: 'Doc kennt die Thesen, Fallbeispiele und Werkzeuge aus dem Buch. Frag ihn, ob du gerade in eine Falle läufst – bevor du unterschreibst.',
      placeholder: 'Zum Beispiel: Ist Kaufen besser als Mieten?',
      send: 'Fragen',
      hello: 'Hallo, ich bin Doc – der KI-Agent zum Buch von Dr. Marcel Hofeditz. Frag mich zu Denkfehlern beim Immobilienkauf, zu den Fallbeispielen oder zu deiner eigenen Situation.',
      chips: ['Was ist der Besitztumseffekt?', 'Wie erkenne ich einen Ankerpreis?', 'Ist Kaufen besser als Mieten?'],
      error: 'Doc ist gerade nicht erreichbar. Bitte versuch es gleich noch einmal.',
      note: 'Doc ist eine KI. Keine Anlage-, Rechts- oder Steuerberatung.',
    },
    author: {
      kicker: 'Der Autor',
      name: ['Dr. Marcel', 'Hofeditz'],
      role: 'Entscheidungsforscher · Immobilienunternehmer · Plattformgründer',
      text: [
        'Promoviert summa cum laude an der Universität Münster – zu Vertrauen, Compliance und systematischen Fehlurteilen. Genau die Verzerrungen, die im Immobilienmarkt wirken.',
        'Als Co-CEO eines familiengeführten Maklerhauses verantwortete er über 600 Mio. € Transaktionsvolumen. Heute baut er mit Offmarketpool die Plattform, die den verborgenen Markt für Investmentimmobilien öffnet.',
      ],
      cta: 'Mehr über Marcel',
      href: DRH,
    },
    platform: {
      kicker: 'Vom Buch zur Plattform',
      title: 'Aus der Analyse wurde ein Werkzeug.',
      text: 'Die Ideen aus diesem Buch führten zu Offmarketpool: Investmentimmobilien, die nie öffentlich inseriert werden – gematcht über Ankaufsprofile, abseits von Bieterwettbewerb und künstlicher Verknappung.',
      stats: [{ n: '1.100+', l: 'Objekte im Pool' }, { n: '€10 Mrd.+', l: 'Objektvolumen' }, { n: '7.000+', l: 'Investorenprofile' }],
      cta: 'Offmarketpool entdecken',
      href: OMP('platform'),
    },
    faq: {
      kicker: 'Fragen',
      title: 'Was du wissen solltest',
      items: [
        { q: 'Wie heißt das Buch genau?', a: 'Der Titel lautet „Psychologie beim Immobilienkauf – Was Makler wissen, aber Käufer nicht“. „Die Immobilienlüge“ ist die These dahinter und der Name dieser Seite. Das Buch erscheint im Herbst 2027 bei Econ (Ullstein Buchverlage) als Klappenbroschur mit rund 220 Seiten.' },
        { q: 'Kann man mit Immobilien reich werden?', a: 'Das Buch vergleicht Wohneigentum über 50 Jahre mit alternativen Anlagen – inflationsbereinigt und nach Kosten. Das Ergebnis fällt deutlich nüchterner aus als das Narrativ vom Betongold. Entscheidend ist, wer rechnet und wer nur glaubt.' },
        { q: 'Was ist Immobilienpsychologie?', a: 'Die Lehre von den kognitiven Verzerrungen, die Immobilienentscheidungen lenken: Besitztumseffekt, Ankereffekt, Herdenverhalten, Reziprozität und Projektionsfehler – auf Käufer- wie auf Verkäuferseite.' },
        { q: 'Für wen ist das Buch?', a: 'Für alle, die eine Immobilie kaufen, verkaufen oder schon besitzen – und für Investoren, die wissen wollen, an welcher Stelle ihr eigenes Gehirn gegen sie arbeitet.' },
        { q: 'Was sind Off-Market-Immobilien?', a: 'Objekte, die nicht öffentlich inseriert, sondern diskret über Netzwerke oder Plattformen wie Offmarketpool gehandelt werden. Viele psychologische Fallen des öffentlichen Marktes fallen dort weg.' },
      ],
    },
    finale: {
      kicker: 'Herbst 2027',
      title: 'Wer zuerst prüft, gewinnt.',
      text: 'Schreib uns kurz – du erfährst als Erstes vom Erscheinungstermin und bekommst vorab Leseproben.',
      cta: 'Jetzt vormerken',
      mailSubject: 'Vormerken: Psychologie beim Immobilienkauf',
    },
    footer: { imprint: 'Impressum', privacy: 'Datenschutz', publisher: 'Psychologie beim Immobilienkauf · Econ (Ullstein Buchverlage) · Herbst 2027' },
  },

  en: {
    meta: {
      title: 'The Property Lie – the psychology of buying real estate | Dr. Marcel Hofeditz',
      description:
        'The Property Lie: why our brains fail us at the biggest purchase of our lives. The book by Dr. Marcel Hofeditz, published in German as “Psychologie beim Immobilienkauf” by Econ (Ullstein), autumn 2027.',
    },
    nav: { book: 'The book', traps: 'The traps', chapters: 'Contents', doc: 'Ask Doc', author: 'Author', cta: 'Get notified', lang: 'DE', langHref: SITE.de },
    hero: {
      kicker: 'The book · Econ · Autumn 2027',
      title: ['The', 'Property', 'Lie.'],
      book: 'Psychologie beim Immobilienkauf',
      subtitle: 'German edition · English edition not yet announced',
      lead: 'You don’t make the biggest decision of your life with a calculator. You make it with a brain that systematically fools itself. This book shows how – and how to notice before it gets expensive.',
      cta1: 'Get notified',
      cta2: 'Ask Doc',
    },
    ticker: ['Endowment effect', 'Anchoring', 'Herd behaviour', 'Reciprocity', 'Projection bias', 'Winner’s curse', 'Opportunity cost', 'Trust, but verify'],
    book: {
      kicker: 'The book',
      title: 'What agents know and buyers don’t.',
      text: 'Behavioural economics, game theory and more than 20 real cases from the German property market – combined into a checklist that protects your next purchase from your own brain. Written by someone who knows both sides: the research and the negotiating table.',
      facts: [['Title (German)', 'Psychologie beim Immobilienkauf'], ['Publisher', 'Econ (Ullstein)'], ['Release', 'Autumn 2027'], ['English edition', 'Not yet announced']],
    },
    thesis: {
      kicker: 'The thesis',
      lines: ['Real estate is', 'not a market of concrete.', 'It is a market', 'of psychology.'],
      text: '“Bricks and mortar”, “real assets”, “pension plan” – few investments are as culturally rooted. Yet the real return after inflation, interest and maintenance tells a different story than the barbecue talk. Fundamentals don’t decide who buys – anchors, herds and the belief that owning is always right do.',
      quote: 'Real estate is seen as the epitome of safety. But that safety is no law of nature. It is a narrative.',
    },
    traps: {
      kicker: 'The traps',
      title: 'Five biases. Real cases. Six-figure sums.',
      items: [
        { img: '/img/brain-hero.webp', k: 'Chapter 2', t: 'The endowment effect', d: 'What we own, we value more. A bias that distorts prices by six figures: Klaus from Stuttgart overpaid by €180,000.' },
        { img: '/img/anker.webp', k: 'Chapter 3', t: 'The anchoring effect', d: 'The first price you hear shapes everything after. Julia and Tim ended up paying €200,000 too much – because an arbitrary first price set the frame.' },
        { img: '/img/herde.webp', k: 'Chapter 4', t: 'Herd behaviour', d: 'Barbecue, 2021: everyone is buying, so you buy too. Collective enthusiasm feels like market analysis. It isn’t.' },
        { img: '/img/croissant.webp', k: 'Chapter 5', t: 'The croissant trap', d: 'A coffee, a croissant, a friendly agent. Reciprocity is the cheapest sales tool in the industry – and one of the most effective.' },
        { img: '/img/pool.webp', k: 'Chapter 6', t: 'Projection bias', d: 'Sarah, Thomas and the pool: we buy for the life we imagine today, not the one we will live in ten years.' },
      ],
    },
    stats: [
      { n: '21', l: 'chapters' },
      { n: '20+', l: 'real cases' },
      { n: '50', l: 'years of return analysis' },
      { n: '400+', l: 'scientific sources' },
    ],
    acts: {
      kicker: 'Structure',
      title: 'Five acts. One verdict.',
      items: [
        { t: 'The bricks-and-mortar myth', d: 'How a narrative is born and reinforces itself for decades.' },
        { t: 'Cognitive traps', d: 'Endowment, anchoring, herding, reciprocity – the biases behind every purchase.' },
        { t: 'Interest & market logic', d: 'Leverage, financing, opportunity cost – why we calculate wrong, systematically.' },
        { t: 'Systemic lies', d: 'Information asymmetry, greenwashing and the players who profit from it.' },
        { t: 'Structure over belief', d: 'A rational decision model – and AI as the control instance.' },
      ],
    },
    chapters: {
      kicker: 'Contents',
      title: '21 chapters. One checklist.',
      items: [
        ['01', 'Welcome to the greatest self-deception'],
        ['02', 'The endowment effect'],
        ['03', 'The anchoring effect'],
        ['04', 'Herd behaviour'],
        ['05', 'Reciprocity & the croissant trap'],
        ['06', 'Projection bias'],
        ['08', 'The 50-year calculation'],
        ['15', 'Systemic lies'],
        ['20', 'Trust, but verify'],
        ['21', 'AI as the control instance'],
      ],
      more: 'Plus interest mechanics, opportunity cost, game theory at the negotiating table, greenwashing, checklists for buyers and sellers and ready-to-use AI prompts.',
    },
    doc: {
      kicker: 'AI agent · Live',
      title: 'Ask Doc.',
      text: 'Doc knows the theses, cases and tools from the book. Ask him whether you are walking into a trap – before you sign.',
      placeholder: 'For example: is buying better than renting?',
      send: 'Ask',
      hello: 'Hi, I’m Doc – the AI agent for Dr. Marcel Hofeditz’s book. Ask me about biases when buying property, about the cases in the book or about your own situation.',
      chips: ['What is the endowment effect?', 'How do I spot an anchor price?', 'Is buying better than renting?'],
      error: 'Doc is not available right now. Please try again in a moment.',
      note: 'Doc is an AI. No investment, legal or tax advice.',
    },
    author: {
      kicker: 'The author',
      name: ['Dr. Marcel', 'Hofeditz'],
      role: 'Decision researcher · Real estate entrepreneur · Platform founder',
      text: [
        'Doctorate summa cum laude from the University of Münster on trust, compliance and systematic misjudgement – exactly the biases at work in property markets.',
        'As co-CEO of a family-run brokerage he was responsible for more than €600m in transactions. Today he is building Offmarketpool, the platform that opens up the hidden market for investment property.',
      ],
      cta: 'More about Marcel',
      href: DRH,
    },
    platform: {
      kicker: 'From book to platform',
      title: 'The analysis became a tool.',
      text: 'The ideas in this book led to Offmarketpool: investment properties that are never publicly listed – matched via acquisition profiles, away from bidding wars and artificial scarcity.',
      stats: [{ n: '1,100+', l: 'assets in the pool' }, { n: '€10bn+', l: 'volume' }, { n: '7,000+', l: 'investor profiles' }],
      cta: 'Discover Offmarketpool',
      href: OMP('platform-en'),
    },
    faq: {
      kicker: 'Questions',
      title: 'What you should know',
      items: [
        { q: 'Is there an English edition?', a: 'Not yet. The book is published in German as “Psychologie beim Immobilienkauf – Was Makler wissen, aber Käufer nicht” by Econ (Ullstein) in autumn 2027. Get notified and we’ll tell you if an English edition follows.' },
        { q: 'Can you get rich with real estate?', a: 'The book compares home ownership over 50 years with alternative investments – adjusted for inflation and costs. The result is far more sober than the bricks-and-mortar story. What matters is who calculates and who merely believes.' },
        { q: 'What is property psychology?', a: 'The study of the cognitive biases that steer real estate decisions: endowment effect, anchoring, herd behaviour, reciprocity and projection bias – on the buyer’s and the seller’s side.' },
        { q: 'What are off-market properties?', a: 'Properties that are not publicly listed but traded discreetly through networks or platforms such as Offmarketpool. Many psychological traps of the open market disappear there.' },
      ],
    },
    finale: {
      kicker: 'Autumn 2027',
      title: 'Whoever checks first, wins.',
      text: 'Drop us a line – you’ll be the first to hear about the release and an English edition.',
      cta: 'Get notified',
      mailSubject: 'Notify me: The Property Lie',
    },
    footer: { imprint: 'Imprint', privacy: 'Privacy', publisher: 'Psychologie beim Immobilienkauf · Econ (Ullstein) · Autumn 2027 · German edition' },
  },
}
