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
    type: 'Zero-Cost Entry Point',
    description: 'For those ready to stop scrolling and start testing.',
    price: 'FREE',
    features: [
      'Live smartphone prompt teardowns',
      'Zero laptop needed',
      'Direct community access',
      'Free mobile AI tool stack',
    ],
    cta: 'Join Free Masterclass →',
    href: '#community',
    featured: false,
  },
  {
    number: '02',
    blobPath: BLOB_PATHS.tier2,
    wmPath: BLOB_PATHS.wmCard6,
    tintIndex: 1 as const,
    name: 'ShipFastWithAI Mentorship',
    type: '4-Week Intensive Cohort',
    description: '4-week intensive execution cohort to turn your skills into a live product.',
    price: 'ENROLLMENT OPEN',
    features: [
      '1-on-1 workflow reviews',
      'Nestuge and Selar payment funnel setup',
      'WhatsApp VIP room access',
      'Ship a live monetizable digital asset',
    ],
    cta: 'Apply for Cohort →',
    href: links.whatsapp,
    featured: true,
  },
  {
    number: '03',
    blobPath: BLOB_PATHS.tier3,
    wmPath: BLOB_PATHS.wmCard7,
    tintIndex: 2 as const,
    name: 'Executive & Institutional Consulting',
    type: 'Enterprise & Advisory',
    description: 'For founders, lecturers, and enterprise teams seeking custom AI integration and staff upskilling.',
    price: 'BESPOKE',
    features: [
      'Custom team workflow automation',
      'Staff and faculty AI literacy workshops',
      'Private executive strategy session',
      'Tailored implementation roadmap',
    ],
    cta: 'Book Strategy Session →',
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
      tag: 'HARDWARE GATE',
      status: 'BLOCKED BY CAPITAL',
      title: 'The ₦1.5M Workstation Myth',
      detail: 'Told you need an M-series MacBook or ₦1.5M desktop workstation before you can run serious AI workflows.',
      meta: 'HARDWARE REQUIREMENT: ₦1,500,000+',
    },
    ship: {
      number: '01',
      path: BLOB_PATHS.framework1,
      tag: 'MOBILE NATIVE',
      status: 'DEVICE ACCESSIBLE',
      title: '100% Smartphone Execution',
      detail: 'Execute high-yield prompt architectures and product builds directly on Android or iOS. Zero laptop needed to launch.',
      meta: 'HARDWARE NEEDED: ZERO LAPTOP',
    },
  },
  {
    wmNoise: BLOB_PATHS.wmCard3,
    wmShip: BLOB_PATHS.wmCard4,
    noise: {
      number: '02',
      path: BLOB_PATHS.noise2,
      tag: 'SUBSCRIPTION TRAP',
      status: 'CARD DECLINE LOOP',
      title: 'The $60/Month SaaS Trap',
      detail: 'Required to pay for multiple foreign subscriptions that drain your budget and repeatedly decline on local debit cards.',
      meta: 'MONTHLY DRAIN: $20 TO $60/MO',
    },
    ship: {
      number: '02',
      path: BLOB_PATHS.framework2,
      tag: 'FREE AI STACK',
      status: 'HIGH-LEVERAGE',
      title: 'The Zero-Cost Model Stack',
      detail: 'Leverage battle-tested free-tier AI tools tuned for rapid asset creation with zero recurring subscription fees.',
      meta: 'RECURRING OVERHEAD: ₦0/MONTH',
    },
  },
  {
    wmNoise: BLOB_PATHS.wmCard5,
    wmShip: BLOB_PATHS.wmCard6,
    noise: {
      number: '03',
      path: BLOB_PATHS.noise3,
      tag: 'THEORY PARALYSIS',
      status: '20 TABS OPEN',
      title: '2-Hour YouTube Rabbit Holes',
      detail: 'Endless theoretical tutorial streams that leave you exhausted, confused, and with zero executable digital assets.',
      meta: 'OUTCOME: ZERO SHIPPED ASSETS',
    },
    ship: {
      number: '03',
      path: BLOB_PATHS.framework3,
      tag: 'SPRINT EXECUTION',
      status: 'FAST-TRACK',
      title: 'Step-by-Step Ship Blueprints',
      detail: 'Structured, repeatable creation workflows that turn your skills into a packaged, sellable digital product within days.',
      meta: 'CYCLE TIME: CONCEPT TO LIVE ASSET',
    },
  },
  {
    wmNoise: BLOB_PATHS.wmCard7,
    wmShip: BLOB_PATHS.wmHero,
    noise: {
      number: '04',
      path: BLOB_PATHS.noise4,
      tag: 'PAYMENT DEAD END',
      status: 'GEO-LOCKED',
      title: 'The Stripe & PayPal Barrier',
      detail: 'Western tutorials pushing payment platforms that lock African creators out of merchant accounts and freeze funds.',
      meta: 'PAYOUT STATUS: ACCESS DENIED',
    },
    ship: {
      number: '04',
      path: BLOB_PATHS.framework4,
      tag: 'LOCAL SETTLEMENT',
      status: 'BANK INTEGRATED',
      title: 'Nestuge & Selar Payment Rails',
      detail: 'Direct integration with accessible African checkout funnels. Earnings deposit straight to your local Nigerian bank account.',
      meta: 'PAYOUT: DIRECT LOCAL BANK TRANSFER',
    },
  },
]

const faqs = [
  [
    'Do I really need zero laptop to begin?',
    'Yes. Every core workflow is designed and tested on smartphones. A laptop is helpful later for scale, but it is never a prerequisite to build, package, and launch your first digital product.',
  ],
  [
    'What if foreign payment gateways like Stripe do not support my country?',
    'That is precisely why we build around accessible African payment rails like Nestuge and Selar. Your customers pay via cards, USSD, or local bank transfers, and earnings deposit straight to your local bank.',
  ],
  [
    'Is this training suitable for complete beginners?',
    'Yes. We cut through complex technical jargon. If you know how to operate WhatsApp, download apps, and follow structured instructions, you can follow these workflows.',
  ],
  [
    'What happens once I join the community?',
    'You get access to daily mobile prompts, live breakdown sessions, cohort announcements, and a room of fellow Nigerian and African builders actively shipping.',
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
            <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
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
            <em>Starting with the phone in your hand.</em>
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Forget ₦1.5M laptops and complex setups. Master battle-tested AI workflows built specifically for Nigerian and African creators to turn ideas into digital products, directly from your smartphone.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <a className="button" href="#training">
              Explore Training Tiers →
            </a>
            <a className="button button-glass" href="#community">
              <span className="live-dot" /> Join Free WhatsApp & Telegram
            </a>
          </motion.div>

          <div className="proof">
            <div className="avatar-stack">
              <span>O</span>
              <span>A</span>
              <span>I</span>
              <span>+</span>
            </div>
            <span>
              Empowering <strong>1,000+ Nigerian Youth, Builders & Digital Product Creators</strong>
            </span>
          </div>
        </div>

        {/* Hero Visual: Grounded Architecture Pipeline with Organic Blob Watermark */}
        <div className="hero-art" aria-label="Smartphone execution architecture">
          <BlobWatermark path={BLOB_PATHS.wmHero} color="#F59E0B" />

          <motion.div
            className="pipeline-card"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="pipeline-top">
              <span className="mini-label">WORKFLOW / 001</span>
              <span className="status"><i /> SMARTPHONE ACTIVE</span>
            </div>

            <div className="pipeline-title">
              Mobile Digital Asset<br />
              <span>Production Pipeline</span>
            </div>

            <div className="pipeline-steps">
              <div className="pipeline-step">
                <span className="pipeline-step-num">01</span>
                <span>Mobile Prompt Architecture</span>
              </div>
              <div className="pipeline-step">
                <span className="pipeline-step-num">02</span>
                <span>Digital Asset Packaging</span>
              </div>
              <div className="pipeline-step">
                <span className="pipeline-step-num">03</span>
                <span>Nestuge & Selar Payment Rails</span>
              </div>
            </div>

            <div className="pipeline-footer">
              <span>LOCAL PAYOUTS</span>
              <strong>ACTIVE TO BANK</strong>
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
                The Friction You Face.
                <br />
                <em>The System That Ships.</em>
              </h2>
            </div>
            <p>
              Western tutorials assume infinite budgets, ₦1.5M laptops, and foreign credit cards. Olajide AILabs is engineered specifically for the African builder standing in the real world.
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
              Frameworks that
              <br />
              <em>move you forward.</em>
            </h2>
          </div>
          <p>
            Skip the loud online advice. Get the exact blueprints and workflows to build, package, and sell high-ticket digital products directly on your phone.
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
                  The exact blueprint to build, package, and sell high-ticket digital products directly on your phone without touching a line of complex code.
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
                  Cut through the prompt clutter. Copy-paste battle-tested frameworks tuned for image generation, copywriting, and daily automation.
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
                Choose your
                <br />
                <em>next move.</em>
              </h2>
            </div>
            <p>
              Whether you are working shifts, studying, freelancing, or building after hours, choose the practical move that fits your current stage.
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
              Join the
              <br />
              <em>Engine Room.</em>
            </h2>
            <p>
              Don't build in isolation. Get daily mobile prompts, live event alerts, and direct networking with fellow builders across Nigeria and Africa.
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
                <small>Daily prompts, teardowns and event alerts →</small>
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
                <strong>WhatsApp VIP Community</strong>
                <small>Direct networking and cohort discussions →</small>
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
            <img
              src="/olajideailabsceo.png"
              alt="Olajide Igbalaye in his studio"
              className="about-photo"
            />
            <span className="about-photo-label">HOST / BUILDER / EDUCATOR</span>
          </div>

          <div className="about-copy">
            <span className="section-number">05 / ABOUT OLAJIDE</span>
            <h2>
              Build from
              <br />
              <em>where you are.</em>
            </h2>
            <p>
              I help Nigerian and African creators turn curiosity into practical AI skills, digital products, and sustainable income. From the podcast microphone to the smartphone in your hand, the mission is simple: make technology useful, accessible, and yours.
            </p>
            <p>
              No high-barrier gatekeeping. Just real workflows tested in our local environment that deliver measurable outcomes.
            </p>

            <div className="about-links">
              <a href={links.youtube} target="_blank" rel="noreferrer">
                <span>YouTube (@remotejd)</span>
                <small>Builder stories and tutorials</small>
                <span className="about-arrow">→</span>
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <small>Professional notes and collaborations</small>
                <span className="about-arrow">→</span>
              </a>
              <a href={links.twitter} target="_blank" rel="noreferrer">
                <span>Twitter / X</span>
                <small>Ideas and execution in public</small>
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
            Questions,
            <br />
            <em>answered.</em>
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
            Practical, mobile-first AI engineering and digital product monetization.
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
