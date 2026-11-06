'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  OrganicBlob,
  BlobWatermark,
  BLOB_PATHS,
} from '@/components/OrganicBlob'

const links = {
  nestuge: 'https://nestuge.com',
  telegram: 'https://t.me/olajideailabs',
  whatsapp: 'https://chat.whatsapp.com/Fvjxen8MJvR0sKTK6bruKm',
  youtube: 'https://www.youtube.com/@remotejd',
  linkedin: 'https://www.linkedin.com/in/olajide-igbalaye',
  twitter: 'https://twitter.com/jidelence',
  portfolio: 'https://jdev-live.vercel.app',
}

const tiers = [
  {
    number: '01',
    blobPath: BLOB_PATHS.tier1,
    wmPath: BLOB_PATHS.wmCard5,
    tintIndex: 0 as const,
    name: 'AI Money Lab',
    type: 'Free Entry Point',
    description: 'You keep watching, but nothing is happening. Start here. Zero cost, zero laptop, zero excuses.',
    price: 'FREE',
    features: [
      'Live phone-based prompt teardowns',
      'No laptop required, ever',
      'Drop into the community immediately',
      'The exact free AI tools we use daily',
    ],
    cta: 'Come in for free →',
    href: '#community',
    featured: false,
  },
  {
    number: '02',
    blobPath: BLOB_PATHS.tier2,
    wmPath: BLOB_PATHS.wmCard6,
    tintIndex: 1 as const,
    name: 'ShipFastWithAI Mentorship',
    type: '4-Week Hands-On Cohort',
    description: 'You have the idea. You just need someone to sit with you and make sure it actually ships.',
    price: 'ENROLLMENT OPEN',
    features: [
      'Your workflows reviewed 1-on-1',
      'Full Nestuge and Selar store setup',
      'Private WhatsApp room with active builders',
      'Leave with a real product earning real money',
    ],
    cta: 'Apply for the cohort →',
    href: links.whatsapp,
    featured: true,
  },
  {
    number: '03',
    blobPath: BLOB_PATHS.tier3,
    wmPath: BLOB_PATHS.wmCard7,
    tintIndex: 2 as const,
    name: 'Executive & Institutional Consulting',
    type: 'Private Advisory',
    description: 'Your team is behind. Your institution is still printing PowerPoints. Let\'s fix that properly.',
    price: 'BESPOKE',
    features: [
      'Custom AI rollout for your whole team',
      'Staff training that actually sticks',
      'Private strategy session with Olajide',
      'A clear 90-day implementation plan',
    ],
    cta: 'Book a strategy session →',
    href: links.linkedin,
    featured: false,
  },
]

const realityModules = [
  {
    wmNoise: BLOB_PATHS.wmCard1,
    wmShip: BLOB_PATHS.wmCard2,
    noise: {
      number: '01',
      path: BLOB_PATHS.noise1,
      tag: 'WHAT THEY TELL YOU',
      status: 'KILLS YOUR START',
      title: 'You need a ₦1.5M laptop first.',
      detail: 'Every tutorial opens with a MacBook on a desk. Meanwhile your Tecno or Samsung is sitting right there, fully capable and completely ignored.',
      meta: 'THE MYTH: ₦1,500,000 BEFORE YOU BEGIN',
    },
    ship: {
      number: '01',
      path: BLOB_PATHS.framework1,
      tag: 'WHAT ACTUALLY WORKS',
      status: 'START TODAY',
      title: 'Your phone is already the tool.',
      detail: 'Every workflow we teach is built and tested on a smartphone. Android, iOS, it does not matter. If you can read this, you have everything you need to start.',
      meta: 'WHAT YOU NEED: THE PHONE IN YOUR HAND',
    },
  },
  {
    wmNoise: BLOB_PATHS.wmCard3,
    wmShip: BLOB_PATHS.wmCard4,
    noise: {
      number: '02',
      path: BLOB_PATHS.noise2,
      tag: 'THE SUBSCRIPTION TRAP',
      status: 'CARD DECLINE LOOP',
      title: '$60 a month on tools that keep declining.',
      detail: 'You finally commit, enter your card, and it fails. Again. Foreign subscriptions were never designed with your bank or your budget in mind.',
      meta: 'THE DRAIN: $20 TO $60 EVERY MONTH',
    },
    ship: {
      number: '02',
      path: BLOB_PATHS.framework2,
      tag: 'THE FREE STACK',
      status: 'ZERO MONTHLY COST',
      title: 'The same output. Zero subscriptions.',
      detail: 'We use free-tier AI tools that actually work. No dollar card needed. No monthly fee eating your budget. Just the tools, and how to use them well.',
      meta: 'YOUR OVERHEAD: ₦0 PER MONTH',
    },
  },
  {
    wmNoise: BLOB_PATHS.wmCard5,
    wmShip: BLOB_PATHS.wmCard6,
    noise: {
      number: '03',
      path: BLOB_PATHS.noise3,
      tag: 'THE TUTORIAL SPIRAL',
      status: '20 TABS, ZERO SHIPPED',
      title: 'You have watched 40 hours of YouTube. Nothing shipped.',
      detail: 'More videos, more notes, more saved playlists. But no product, no income, no proof. Watching is not the same as building.',
      meta: 'THE RESULT: INFORMATION, NO OUTPUT',
    },
    ship: {
      number: '03',
      path: BLOB_PATHS.framework3,
      tag: 'THE BUILD SYSTEM',
      status: 'SHIP IN DAYS',
      title: 'A repeatable blueprint from idea to live product.',
      detail: 'Step-by-step workflows that move you from blank page to packaged, listed, and selling. You will ship your first digital product faster than you expect.',
      meta: 'THE CYCLE: IDEA TO LIVE PRODUCT',
    },
  },
  {
    wmNoise: BLOB_PATHS.wmCard7,
    wmShip: BLOB_PATHS.wmHero,
    noise: {
      number: '04',
      path: BLOB_PATHS.noise4,
      tag: 'THE PAYMENT WALL',
      status: 'GEO-BLOCKED',
      title: 'Stripe says your country is not supported.',
      detail: 'You built the product. You found the customer. Then Stripe freezes the account or blocks the signup entirely. Your geography is not a failure, it is just the wrong tool.',
      meta: 'THE BLOCK: ACCESS DENIED AT CHECKOUT',
    },
    ship: {
      number: '04',
      path: BLOB_PATHS.framework4,
      tag: 'LOCAL PAYMENT RAILS',
      status: 'PAYS TO YOUR BANK',
      title: 'Nestuge and Selar pay you in naira. Directly.',
      detail: 'African checkout platforms built for African sellers. Your customers pay by card, USSD, or bank transfer. Your earnings land in your account without the drama.',
      meta: 'THE PAYOUT: STRAIGHT TO YOUR LOCAL BANK',
    },
  },
]

const faqs = [
  [
    'Do I really need zero laptop to begin?',
    'Yes, seriously. Everything is built and tested on a phone. A laptop might help later when you want to scale, but you can build, package, price, and launch your first digital product without ever touching one.',
  ],
  [
    'What if Stripe or PayPal do not work in my country?',
    'That is exactly why this exists. We use Nestuge and Selar, which are built for African sellers. Your customers pay by card, USSD, or bank transfer, and the money lands in your local account. No workarounds, no frozen funds.',
  ],
  [
    'Is this for complete beginners or do I need a background in tech?',
    'If you can use WhatsApp, download an app, and follow instructions, you can follow these workflows. We skip the jargon and go straight to what you actually need to do, in order, step by step.',
  ],
  [
    'What do I get when I join the community?',
    'Daily prompts you can use on your phone right now, live sessions where we break down real workflows, early access to cohort announcements, and a room full of Nigerian and African builders who are actively shipping, not just talking about it.',
  ],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />

      {/* Navigation */}
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#top" className="brand" aria-label="Olajide AILabs home">
            <img src="/olajideailab.png" alt="Olajide AILabs" />
          </a>

          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#reality" onClick={() => setMenuOpen(false)}>Reality Check</a>
            <a href="#toolkits" onClick={() => setMenuOpen(false)}>eBooks</a>
            <a href="#training" onClick={() => setMenuOpen(false)}>Training Tiers</a>
            <a href="#community" className="nav-desktop-only" onClick={() => setMenuOpen(false)}>Community</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a className="nav-mobile-cta" href="#community" onClick={() => setMenuOpen(false)}>
              Join Free Community →
            </a>
          </div>

          <a className="button button-small nav-cta" href="#community">
            Join Free Community →
          </a>

          <button
            className={`menu-button ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-lines" aria-hidden="true">
              <i /><i /><i />
            </span>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero container" id="top">
        <div className="hero-copy">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Practical AI workflows for African builders.
            <br />
            <em>Your phone is enough to start.</em>
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            You have been told you need a ₦1.5M laptop, a dollar card, and 6 months of studying before you can earn anything from AI. None of that is true. Here is what actually works.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <a className="button" href="#training">
              See how the training works →
            </a>
            <a className="button button-glass" href="#community">
              <span className="live-dot" /> Join the free community
            </a>
          </motion.div>

          <div className="proof">
            <div className="avatar-stack">
              <img src="/ailab1.png" alt="Community member" />
              <img src="/ailab2.png" alt="Community member" />
              <img src="/ailab3.png" alt="Community member" />
              <img src="/ailab4.png" alt="Community member" />
            </div>
            <span>
              Over <strong>1,000 Nigerian builders and digital creators</strong> already inside
            </span>
          </div>
        </div>

        {/* Hero Visual: Founder Portrait with Grounded Organic Accents */}
        <div className="hero-art" aria-label="Olajide Igbalaye, Builder and Mentor">
          <BlobWatermark path={BLOB_PATHS.wmHero} color="#F59E0B" />

          <motion.div
            className="hero-photo-card"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="hero-photo-tag">
              <span className="live-dot" /> BUILDER IN STUDIO
            </span>

            <img
              src="/olajideailabsceo.png"
              alt="Olajide Igbalaye"
              className="hero-photo-img"
            />

            <div className="hero-photo-overlay" />

            <div className="hero-photo-caption">
              <span className="hero-photo-role">FOUNDER &amp; PRACTITIONER</span>
              <strong className="hero-photo-name">Olajide Igbalaye</strong>
            </div>
          </motion.div>

          <motion.div
            className="floating-chip"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          >
            <OrganicBlob
              path={BLOB_PATHS.ref2}
              label="AI"
              tintIndex={1}
              fontSize={18}
              className="size-10"
            />
            <span>Hardware: <strong>Zero Laptop Needed</strong></span>
          </motion.div>

          <div className="crosshair crosshair-a">+</div>
          <div className="crosshair crosshair-b">+</div>
          <div className="art-label label-a">01 / CLARITY</div>
          <div className="art-label label-b">02 / SHIP</div>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker">
        <div className="container ticker-inner">
          <span>THE OLAJIDE AILABS METHOD</span>
          <span>CLARITY • EXECUTION • LEVERAGE • OWNERSHIP</span>
          <span>100% SMARTPHONE FIRST</span>
        </div>
      </div>

      {/* Section 01: THE REALITY CHECK (Unique Confrontation Matrix) */}
      <section className="section reality-section" id="reality">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-number">01 / THE REALITY CHECK</span>
              <h2>
                What you keep hearing.
                <br />
                <em>What is actually true.</em>
              </h2>
            </div>
            <p>
              Every AI tutorial you find online was made for someone with a MacBook, a dollar card, and no data cap. We built this for everyone else.
            </p>
          </div>

          <div className="reality-matrix">
            {realityModules.map((module, idx) => (
              <div className="reality-module group" key={idx}>
                {/* Left: The Friction / Noise */}
                <div className="reality-side-noise">
                  <BlobWatermark path={module.wmNoise} color="#F59E0B" />

                  <div className="reality-meta">
                    <span className="reality-tag-noise">{module.noise.tag}</span>
                    <span className="reality-status-badge noise">{module.noise.status}</span>
                  </div>

                  <div className="reality-body">
                    <OrganicBlob
                      path={module.noise.path}
                      label={module.noise.number}
                      tintIndex={idx as 0 | 1 | 2 | 3}
                      variant="brand"
                    />
                    <div className="reality-text">
                      <h4>{module.noise.title}</h4>
                      <p>{module.noise.detail}</p>
                    </div>
                  </div>

                  <div className="reality-footer-tag noise">
                    <span>{module.noise.meta}</span>
                    <span>FICTION</span>
                  </div>
                </div>

                {/* Center Conduit: Transition */}
                <div className="reality-conduit">
                  <span className="reality-conduit-pill">VS</span>
                  <span className="reality-conduit-arrow">→</span>
                </div>

                {/* Right: The Shipping Rail */}
                <div className="reality-side-ship">
                  <BlobWatermark path={module.wmShip} color="#10B981" />

                  <div className="reality-meta">
                    <span className="reality-tag-ship">{module.ship.tag}</span>
                    <span className="reality-status-badge ship">{module.ship.status}</span>
                  </div>

                  <div className="reality-body">
                    <OrganicBlob
                      path={module.ship.path}
                      label={module.ship.number}
                      tintIndex={idx as 0 | 1 | 2 | 3}
                      variant="solution"
                    />
                    <div className="reality-text">
                      <h4>{module.ship.title}</h4>
                      <p>{module.ship.detail}</p>
                    </div>
                  </div>

                  <div className="reality-footer-tag ship">
                    <span>{module.ship.meta}</span>
                    <span>ACTIVE RAIL</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02: FEATURED EBOOKS & DIGITAL ASSETS */}
      <section className="section container" id="toolkits">
        <div className="section-heading">
          <div>
            <span className="section-number">02 / DIGITAL ASSETS</span>
            <h2>
              Tools you can
              <br />
              <em>actually use today.</em>
            </h2>
          </div>
          <p>
            No theory, no filler. These are the exact blueprints and templates we use to build and sell digital products on a smartphone. Download and start.
          </p>
        </div>

        <div className="toolkit-grid">
          {/* eBook 1: The Mobile AI Monetization Playbook */}
          <motion.a
            whileHover={{ y: -4 }}
            className="toolkit-card toolkit-dark group"
            href={links.nestuge}
            target="_blank"
            rel="noreferrer"
          >
            <BlobWatermark path={BLOB_PATHS.wmCard3} color="#F59E0B" />

            <div className="card-top">
              <OrganicBlob path={BLOB_PATHS.ebook1} label="01" tintIndex={0} />
              <span className="card-tag">
                AVAILABLE NOW <span>• NESTUGE</span>
              </span>
            </div>

            <div className="toolkit-art">
              <div className="book">
                <span>O</span>
                <strong>
                  THE MOBILE
                  <br />
                  AI
                  <br />
                  <i>MONETIZATION</i>
                  <br />
                  PLAYBOOK
                </strong>
                <small>O.AI / 001</small>
              </div>
            </div>

            <div className="card-bottom">
              <div>
                <h3>The Mobile AI Monetization Playbook</h3>
                <p>
                  You have the phone. This is the blueprint. Build, package, and sell your first digital product without writing a single line of code.
                </p>
              </div>
              <span className="circle-arrow">
                →
              </span>
            </div>
          </motion.a>

          {/* eBook 2: Smartphone Prompt Engineering & AI Workflows */}
          <motion.a
            whileHover={{ y: -4 }}
            className="toolkit-card toolkit-secondary group"
            href="#community"
          >
            <BlobWatermark path={BLOB_PATHS.wmCard4} color="#FBBF24" />

            <div className="card-top">
              <OrganicBlob path={BLOB_PATHS.ebook2} label="02" tintIndex={1} />
              <span className="card-tag">
                OFFICIAL RELEASE <span>• FREE TO COMMUNITY</span>
              </span>
            </div>

            <div className="toolkit-art">
              <div className="framework-card-art">
                <div className="framework-meta">
                  <span>BLUEPRINT / 002</span>
                  <span>MOBILE NATIVE</span>
                </div>
                <div className="framework-card-title">
                  Smartphone Prompt Engineering
                </div>
                <div className="framework-pill-list">
                  <span>&gt; Image Generation Framework</span>
                  <span>&gt; Copywriting Architecture</span>
                  <span>&gt; Daily Task Automation</span>
                </div>
              </div>
            </div>

            <div className="card-bottom">
              <div>
                <h3>Smartphone Prompt Engineering & AI Workflows</h3>
                <p>
                  Stop guessing at prompts. These are copy-paste frameworks for image generation, copywriting, and daily automation. All tested on a phone.
                </p>
              </div>
              <span className="circle-arrow">
                →
              </span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Section 03: THREE-TIER TRAINING PROGRAM */}
      <section className="section training-section" id="training">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-number">03 / TRAINING PROGRAMS</span>
              <h2>
                Where do you
                <br />
                <em>want to start?</em>
              </h2>
            </div>
            <p>
              Whether you are running shifts, studying, or just tired of watching from the sidelines, pick the option that matches where you are right now.
            </p>
          </div>

          <div className="tiers">
            {tiers.map((tier) => (
              <motion.article
                whileHover={{ y: -4 }}
                className={`tier ${tier.featured ? 'tier-featured' : ''} group`}
                key={tier.name}
              >
                <BlobWatermark path={tier.wmPath} color={tier.featured ? '#F59E0B' : '#94A3B8'} />

                {tier.featured && <span className="popular">MOST POPULAR FOR BUILDERS</span>}

                <OrganicBlob
                  path={tier.blobPath}
                  label={tier.number}
                  tintIndex={tier.tintIndex}
                />

                <div className="tier-heading">
                  <h3>{tier.name}</h3>
                  <span>{tier.type}</span>
                </div>

                <p className="tier-description">{tier.description}</p>

                <div className="tier-price">{tier.price}</div>

                <ul>
                  {tier.features.map((feature) => (
                    <li key={feature}>
                      <span className="tier-bullet" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className={`button ${tier.featured ? '' : 'button-ghost'}`}
                  href={tier.href}
                  target={tier.href.startsWith('http') ? '_blank' : undefined}
                  rel={tier.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {tier.cta}
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04: COMMUNITY HUB (WhatsApp & Telegram with Organic Blobs) */}
      <section className="community-section" id="community">
        <div className="container community-inner">
          <div>
            <span className="section-number">04 / THE ENGINE ROOM</span>
            <h2>
              Stop building
              <br />
              <em>alone.</em>
            </h2>
            <p>
              The hardest part of building in Africa is not the tools. It is doing it without anyone around you who gets it. Come into the room where people are actually shipping.
            </p>
          </div>

          <div className="community-actions">
            <a
              href={links.telegram}
              target="_blank"
              rel="noreferrer"
              className="community-card group"
            >
              <BlobWatermark path={BLOB_PATHS.wmCard1} color="#F59E0B" />
              <OrganicBlob path={BLOB_PATHS.tg} label="TG" tintIndex={0} fontSize={20} />
              <span>
                <strong>Telegram Knowledge Hub</strong>
                <small>Daily prompts, teardowns, and event alerts →</small>
              </span>
              <span className="community-arrow">→</span>
            </a>

            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="community-card group"
            >
              <BlobWatermark path={BLOB_PATHS.wmCard2} color="#10B981" />
              <OrganicBlob path={BLOB_PATHS.wa} label="WA" tintIndex={1} fontSize={20} />
              <span>
                <strong>WhatsApp Builder Community</strong>
                <small>Where active builders share, ship, and grow →</small>
              </span>
              <span className="community-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 05: ABOUT OLAJIDE */}
      <section className="about-section" id="about">
        <div className="container about-inner">
          <div className="about-photo-wrap">
            <BlobWatermark path={BLOB_PATHS.wmCard8} color="#F59E0B" />
            <img
              src="/olajideailabsceo.png"
              alt="Olajide Igbalaye in his studio"
              className="about-photo"
            />
            <span className="about-photo-label">BUILDER / EDUCATOR / PRACTITIONER</span>
          </div>

          <div className="about-copy">
            <span className="section-number">05 / ABOUT OLAJIDE</span>
            <h2>
              Built from
              <br />
              <em>inside the same walls.</em>
            </h2>
            <p>
              I am Olajide. I teach Nigerian and African creators how to turn their phones, their skills, and free AI tools into income. Not in theory. In practice, the same way I did it.
            </p>
            <p>
              No gatekeeping. No prerequisites. Just workflows that work in our environment, with the tools we can actually access.
            </p>

            <div className="about-links">
              <a href={links.youtube} target="_blank" rel="noreferrer">
                <span>YouTube (@remotejd)</span>
                <small>Watch how we actually build things</small>
                <span className="about-arrow">→</span>
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <small>Connect, collaborate, work together</small>
                <span className="about-arrow">→</span>
              </a>
              <a href={links.twitter} target="_blank" rel="noreferrer">
                <span>Twitter / X</span>
                <small>Short thoughts, in public, in real time</small>
                <span className="about-arrow">→</span>
              </a>
              <a href={links.portfolio} target="_blank" rel="noreferrer">
                <span>JDev Live</span>
                <small>Web projects and experiments</small>
                <span className="about-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06: QUICK CLARITY (FAQS) */}
      <section className="faq-section container">
        <div className="faq-title">
          <span className="section-number">06 / QUICK CLARITY</span>
          <h2>
            Real questions,
            <br />
            <em>straight answers.</em>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={q}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span>0{i + 1}</span>
                <strong>{q}</strong>
                <span className="faq-indicator">+</span>
              </button>
              {openFaq === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.25 }}
                >
                  {a}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer: Zero generic icon libraries */}
      <footer className="footer">
        <div className="container footer-inner">
          <a href="#top" className="brand">
            <img src="/olajideailab.png" alt="Olajide AILabs" />
          </a>
          <p>
            Practical AI skills and digital product monetization, built for African builders.
          </p>
          <div className="footer-social">
            <a href={links.youtube} target="_blank" rel="noreferrer">
              YouTube (@remotejd)
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={links.portfolio} target="_blank" rel="noreferrer">
              JDev Live
            </a>
          </div>
          <small>© 2026 Olajide AILabs. All rights reserved.</small>
        </div>
      </footer>
    </main>
  )
}
