import type { Metadata } from 'next'
import { OrganicBlob, BLOB_PATHS } from '@/components/OrganicBlob'

export const metadata: Metadata = {
  title: 'Olajide AILabs Academy | Practical Tech Training',
  description:
    'Explore practical training in AI web development, AI video content creation, cybersecurity, design, and marketing.',
}

const programs = [
  {
    number: '01',
    path: BLOB_PATHS.tier1,
    tintIndex: 0 as const,
    title: 'Full stack AI web development',
    description:
      'Plan and build complete web experiences while using AI tools throughout the development process.',
  },
  {
    number: '02',
    path: BLOB_PATHS.tier2,
    tintIndex: 1 as const,
    title: 'AI frontend development',
    description:
      'Turn interface ideas into responsive web pages with practical, AI-assisted frontend workflows.',
  },
  {
    number: '03',
    path: BLOB_PATHS.ebook1,
    tintIndex: 2 as const,
    title: 'AI video content creation',
    description:
      'Plan, edit, and publish faceless video with AI tools: phone recording, CapCut editing, free AI voiceover, and a repeatable publishing workflow.',
  },
  {
    number: '04',
    path: BLOB_PATHS.framework1,
    tintIndex: 3 as const,
    title: 'AI cybersecurity',
    description:
      'Build security awareness and learn responsible, defensive ways to apply AI in cybersecurity work.',
  },
  {
    number: '05',
    path: BLOB_PATHS.ebook2,
    tintIndex: 0 as const,
    title: 'AI UI/UX',
    description:
      'Move from user needs to interface concepts, prototypes, and clear design decisions with AI support.',
  },
  {
    number: '06',
    path: BLOB_PATHS.tier3,
    tintIndex: 1 as const,
    title: 'AI graphics designing',
    description:
      'Develop visual concepts and create useful design assets with AI-assisted creative workflows.',
  },
  {
    number: '07',
    path: BLOB_PATHS.framework2,
    tintIndex: 2 as const,
    title: 'AI marketing',
    description:
      'Use AI to research audiences, shape campaigns, and create practical marketing materials.',
  },
]

const academyWhatsApp =
  'https://wa.me/2347031098097?text=' +
  encodeURIComponent('Hi, I would like to learn more about the Olajide AILabs Academy programs.')

export default function AcademyPage() {
  return (
    <main className="site-shell academy-page">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Academy navigation">
          <a href="/" className="brand" aria-label="Olajide AILabs home">
            <img src="/olajideailab.png" alt="Olajide AILabs" />
          </a>
          <div className="academy-nav-links">
            <a href="/#training">Mentorship</a>
            <a href="/#about">About</a>
          </div>
          <a className="button button-small" href={academyWhatsApp} target="_blank" rel="noreferrer">
            Ask about training →
          </a>
        </nav>
      </header>

      <section className="academy-hero container">
        <div className="academy-hero-copy">
          <span className="section-number">OLAJIDE AILABS ACADEMY</span>
          <h1>
            Practical tech skills.
            <br />
            <em>AI in the workflow.</em>
          </h1>
          <p>
            Learn by doing, with AI tools included in the work rather than added as an afterthought.
            Choose a skill area and ask us about the next training.
          </p>
          <div className="academy-hero-actions">
            <a className="button" href="#programs">Explore programs ↓</a>
            <a className="button button-glass" href={academyWhatsApp} target="_blank" rel="noreferrer">
              Ask about a program
            </a>
          </div>
        </div>
        <aside className="academy-principle">
          <OrganicBlob path={BLOB_PATHS.wmHero} label="AI" tintIndex={1} />
          <span className="mini-label">A PRACTICAL STANDARD</span>
          <h2>If the training ignores AI, ask what you are paying for.</h2>
          <p>
            Tools change. The work is learning how to use them well, make sound decisions, and create
            something useful.
          </p>
        </aside>
      </section>

      <section className="academy-programs section" id="programs">
        <div className="container">
          <div className="section-heading academy-section-heading">
            <div>
              <span className="section-number">PROGRAM AREAS</span>
              <h2>
                Choose what
                <br />
                <em>you want to make.</em>
              </h2>
            </div>
            <p>
              Each program pairs a practical skill with AI-assisted ways of working. Contact us for
              current cohort details and the right starting point.
            </p>
          </div>

          <div className="academy-program-grid">
            {programs.map((program) => (
              <article className="academy-program-card" key={program.number}>
                <OrganicBlob
                  path={program.path}
                  label={program.number}
                  tintIndex={program.tintIndex}
                />
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-contact">
        <div className="container academy-contact-inner">
          <div>
            <span className="section-number">START A CONVERSATION</span>
            <h2>Tell us what you want to learn.</h2>
            <p>
              Ask about upcoming training, the tools you will need, and which program fits your
              starting point.
            </p>
          </div>
          <a className="button" href={academyWhatsApp} target="_blank" rel="noreferrer">
            Message the Academy on WhatsApp →
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container academy-footer">
          <a href="/" className="brand" aria-label="Olajide AILabs home">
            <img src="/olajideailab.png" alt="Olajide AILabs" />
          </a>
          <a href="/">Back to Olajide AILabs home →</a>
        </div>
      </footer>
    </main>
  )
}
