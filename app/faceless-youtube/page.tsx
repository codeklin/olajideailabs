'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  OrganicBlob,
  BlobWatermark,
  BLOB_PATHS,
} from '@/components/OrganicBlob'

const links = {
  telegram: 'https://t.me/olajideailabs',
  whatsapp: 'https://chat.whatsapp.com/Fvjxen8MJvR0sKTK6bruKm',
  cohortApplication: `https://wa.me/2347031098097?text=${encodeURIComponent("Hi, I'd like to apply for the Faceless YouTube cohort. My name is ____. My current channel (if any) is ____.")}`,
  calendly: 'https://calendly.com/gigsdev007/30min',
  youtube: 'https://www.youtube.com/@remotejd',
}

const ytRealityModules = [
  {
    wmNoise: BLOB_PATHS.wmCard1,
    wmShip: BLOB_PATHS.wmCard2,
    noise: {
      number: '01',
      path: BLOB_PATHS.noise1,
      tag: 'WHAT THEY TELL YOU',
      status: 'BLOCKS YOUR START',
      title: 'You need a PC and Premiere Pro to edit.',
      detail:
        'Every faceless YouTube guide opens on a desktop with paid software. Meanwhile your phone is sitting right there, fully capable and completely ignored.',
      meta: 'THE MYTH: A PC BEFORE YOU BEGIN',
    },
    ship: {
      number: '01',
      path: BLOB_PATHS.framework1,
      tag: 'WHAT ACTUALLY WORKS',
      status: 'START TODAY',
      title: 'CapCut on your phone covers it.',
      detail:
        'Cut, pace, caption, and export, all on Android or iOS. The same workflow we teach needs no laptop, ever.',
      meta: 'WHAT YOU NEED: CAPCUT, FREE',
    },
  },
  {
    wmNoise: BLOB_PATHS.wmCard3,
    wmShip: BLOB_PATHS.wmCard4,
    noise: {
      number: '02',
      path: BLOB_PATHS.noise2,
      tag: 'THE QUALITY MYTH',
      status: 'FEAR OF DEMONETIZATION',
      title: 'Faceless means low effort, and YouTube flags it.',
      detail:
        'The platform does flag copy-paste AI dumps. That is the lazy version, not the faceless version.',
      meta: 'THE FEAR: FLAGGED AS REPETITIOUS',
    },
    ship: {
      number: '02',
      path: BLOB_PATHS.framework2,
      tag: 'WHAT ACTUALLY WORKS',
      status: 'MONETIZES FINE',
      title: 'Original scripts and real editing. That is what monetizes.',
      detail:
        'Faceless does not mean low effort. You write the script, you cut the footage, you shape the pacing. Your face simply stays off camera.',
      meta: 'THE STANDARD: ORIGINAL + EDITED',
    },
  },
  {
    wmNoise: BLOB_PATHS.wmCard5,
    wmShip: BLOB_PATHS.wmCard6,
    noise: {
      number: '03',
      path: BLOB_PATHS.noise3,
      tag: 'THE PAYOUT MYTH',
      status: 'GEO-BLOCKED?',
      title: 'YouTube does not pay Nigerians.',
      detail:
        'People assume the Partner Program is closed to your country. Nigeria is on the supported list, and has been for years.',
      meta: 'THE MYTH: ACCESS DENIED',
    },
    ship: {
      number: '03',
      path: BLOB_PATHS.framework3,
      tag: 'WHAT ACTUALLY WORKS',
      status: 'PAYS IN USD',
      title: 'AdSense pays Nigerians in dollars, wired to your bank.',
      detail:
        'Once you cross the threshold, AdSense pays in US dollars by wire transfer, straight into your Nigerian bank account. No Stripe, no PayPal, no dollar card.',
      meta: 'THE PAYOUT: USD TO YOUR BANK',
    },
  },
  {
    wmNoise: BLOB_PATHS.wmCard7,
    wmShip: BLOB_PATHS.wmHero,
    noise: {
      number: '04',
      path: BLOB_PATHS.noise4,
      tag: 'THE GEAR MYTH',
      status: 'STUDIO BUDGET',
      title: 'You need a camera, lights, and a full setup.',
      detail:
        'The gear list people hand you reads like a studio invoice. None of it is required to start or to monetize.',
      meta: 'THE COST: A FULL STUDIO RIG',
    },
    ship: {
      number: '04',
      path: BLOB_PATHS.framework4,
      tag: 'WHAT ACTUALLY WORKS',
      status: 'PHONE IS ENOUGH',
      title: 'Your phone, a quiet room, and a free AI voice.',
      detail:
        'Record on your phone, narrate with a free AI voice, edit in CapCut. That is the full kit, and it fits in your pocket.',
      meta: 'THE KIT: PHONE + FREE AI VOICE',
    },
  },
]

const curriculum = [
  {
    number: '01',
    path: BLOB_PATHS.tier1,
    tintIndex: 0 as const,
    title: 'Niche selection',
    description:
      'Pick a faceless niche that monetizes, and learn the ones YouTube flags as repetitious before you waste time on them.',
  },
  {
    number: '02',
    path: BLOB_PATHS.tier2,
    tintIndex: 1 as const,
    title: 'Channel setup',
    description:
      'Name, handle, branding, and the settings that protect your account from day one.',
  },
  {
    number: '03',
    path: BLOB_PATHS.tier3,
    tintIndex: 2 as const,
    title: 'Phone recording',
    description:
      'Shoot and source footage on Android or iOS without a camera rig or external gear.',
  },
  {
    number: '04',
    path: BLOB_PATHS.ebook1,
    tintIndex: 3 as const,
    title: 'CapCut editing',
    description:
      'Cut, pace, add captions, and export, all on your phone, in a workflow you can repeat.',
  },
  {
    number: '05',
    path: BLOB_PATHS.ebook2,
    tintIndex: 0 as const,
    title: 'Free AI voiceover',
    description:
      'Generate narration with free tools. No dollar card, no monthly fee, no studio mic.',
  },
  {
    number: '06',
    path: BLOB_PATHS.framework1,
    tintIndex: 1 as const,
    title: 'Shorts and long-form',
    description:
      'The 10 million Shorts views path and the 4,000 watch hours path, planned so they feed each other.',
  },
  {
    number: '07',
    path: BLOB_PATHS.framework2,
    tintIndex: 2 as const,
    title: 'Thumbnails and titles',
    description:
      'Click-through is half the game. We build both for the scroll, not the search box.',
  },
  {
    number: '08',
    path: BLOB_PATHS.framework3,
    tintIndex: 3 as const,
    title: 'Monetization setup',
    description:
      'AdSense, Selar, and affiliate links wired into your descriptions from the first upload.',
  },
  {
    number: '09',
    path: BLOB_PATHS.noise1,
    tintIndex: 0 as const,
    title: 'Scale to a second channel',
    description:
      'Repeat the system on a new niche without burning out, using the templates you already built.',
  },
]

const monetization = [
  {
    number: '01',
    path: BLOB_PATHS.tier1,
    tintIndex: 0 as const,
    title: 'AdSense',
    description:
      '1,000 subscribers plus 4,000 watch hours in 12 months, or 10 million Shorts views in 90 days. Paid in US dollars by wire transfer to your Nigerian bank.',
  },
  {
    number: '02',
    path: BLOB_PATHS.tier2,
    tintIndex: 1 as const,
    title: 'Selar and Nestuge',
    description:
      'Sell your own templates, scripts, or a course. Link the store in your video descriptions. Customers pay by card, USSD, or bank transfer, and you withdraw in naira.',
  },
  {
    number: '03',
    path: BLOB_PATHS.tier3,
    tintIndex: 2 as const,
    title: 'Affiliate and memberships',
    description:
      'Affiliate links in your descriptions earn outside AdSense. Channel memberships add a recurring monthly layer from your most loyal viewers.',
  },
]

const outcomes = [
  'A faceless channel, set up and branded',
  'A repeatable phone editing workflow in CapCut',
  'Free AI voiceover wired into your process',
  'A content calendar with your first scripts written',
  'AdSense and Selar set up to pay you',
  'A second-niche plan to repeat the system',
]

const ytTiers = [
  {
    number: '01',
    blobPath: BLOB_PATHS.tier1,
    wmPath: BLOB_PATHS.wmCard5,
    tintIndex: 0 as const,
    name: 'The Starter Kit',
    type: 'Free Entry Point',
    description:
      'You keep watching faceless YouTube tutorials and never start. Begin here. Zero cost, zero laptop, zero dollar card.',
    price: 'FREE',
    features: [
      'The niche shortlist and free tools list',
      '30 reusable script templates',
      'Drop into the builder hub immediately',
      'Daily prompts and teardowns',
    ],
    cta: 'Get the free kit →',
    href: '#starter-kit',
    featured: false,
  },
  {
    number: '02',
    blobPath: BLOB_PATHS.tier2,
    wmPath: BLOB_PATHS.wmCard6,
    tintIndex: 1 as const,
    name: 'Faceless YouTube Cohort',
    type: '4-Week Hands-On Cohort',
    description:
      'You have the phone. You need someone to sit with you until the channel is live and earning.',
    price: 'APPLICATION-BASED',
    features: [
      'Your channel and scripts reviewed 1-on-1',
      'Full AdSense and Selar payout setup',
      'Private WhatsApp room with active builders',
      'Leave with a channel at or near the threshold',
    ],
    cta: 'Apply for the cohort →',
    href: links.cohortApplication,
    featured: true,
  },
  {
    number: '03',
    blobPath: BLOB_PATHS.tier3,
    wmPath: BLOB_PATHS.wmCard7,
    tintIndex: 2 as const,
    name: '1-on-1 Channel Review',
    type: 'Private Session',
    description:
      'Your channel is up but stuck. Let us audit it together and find what is holding it back.',
    price: 'BESPOKE',
    features: [
      'Full channel and niche audit',
      'Thumbnail and title teardown',
      'A clear 30-day action plan',
      'Recorded session to revisit',
    ],
    cta: 'Book a review session →',
    href: links.calendly,
    featured: false,
  },
]

const ytFaqs = [
  [
    'Do I really not need a laptop to run a faceless channel?',
    'For starting and running the channel, no. Recording, editing in CapCut, AI voiceover, uploading, and reading your analytics all work on a phone. A laptop helps later if you want to manage several channels at once, but it is not required to begin or to monetize.',
  ],
  [
    'Does YouTube actually pay creators in Nigeria?',
    'Yes. Nigeria is on the YouTube Partner Program list. Once you cross 1,000 subscribers and 4,000 watch hours in the last 12 months, or 10 million Shorts views in 90 days, AdSense pays you in US dollars by wire transfer to your Nigerian bank account.',
  ],
  [
    'Will a faceless channel get demonetized?',
    'Not for being faceless. YouTube flags low-effort, repetitious, copy-paste AI content. The cohort teaches original scripts and real editing, which is what keeps a faceless channel in good standing.',
  ],
  [
    'What free tools do you actually use?',
    'CapCut for editing, free AI voiceover tools for narration, and free stock plus your own phone footage. Nothing in the core stack needs a dollar card or a monthly subscription.',
  ],
  [
    'How is the cohort delivered?',
    'It runs for four weeks with live sessions, a private WhatsApp room, and replay access. You apply, we confirm your starting point, and you build a real channel alongside the group.',
  ],
]

export default function FacelessYouTubePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />

      {/* Navigation */}
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Faceless YouTube navigation">
          <a href="/" className="brand" aria-label="Olajide AILabs home">
            <img src="/olajideailab.png" alt="Olajide AILabs" />
          </a>

          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#reality" onClick={() => setMenuOpen(false)}>
              Reality Check
            </a>
            <a href="#curriculum" onClick={() => setMenuOpen(false)}>
              Curriculum
            </a>
            <a href="#monetization" onClick={() => setMenuOpen(false)}>
              How You Get Paid
            </a>
            <a href="#cohort" onClick={() => setMenuOpen(false)}>
              Cohort
            </a>
            <a
              className="nav-mobile-cta"
              href="#starter-kit"
              onClick={() => setMenuOpen(false)}
            >
              Get the free kit →
            </a>
          </div>

          <a className="button button-small nav-cta" href="#starter-kit">
            Get the free kit →
          </a>

          <button
            className={`menu-button ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-lines" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero container" id="top">
        <div className="hero-copy">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Build a faceless YouTube channel on your phone.
            <br />
            <em>Get paid in USD, straight to your bank.</em>
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            You have been told faceless YouTube needs a PC, paid editing
            software, and a foreign setup to pay you. None of that is true.
            Here is the phone-first path to a monetized channel, with free tools
            and payouts that actually reach your account.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <a className="button" href="#starter-kit">
              Get the free starter kit →
            </a>
            <a className="button button-glass" href="#video">
              <span className="live-dot" /> Watch the workflow
            </a>
          </motion.div>

          <div className="proof">
            <span className="live-dot" />
            <span>
              The threshold: <strong>1,000 subscribers</strong> and{' '}
              <strong>4,000 watch hours</strong>. Your phone is the studio.
            </span>
          </div>
        </div>

        <div className="hero-art" aria-label="Olajide Igbalaye, mentor">
          <BlobWatermark path={BLOB_PATHS.wmHero} color="#F59E0B" />

          <motion.div
            className="hero-photo-card"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="hero-photo-tag">
              <span className="live-dot" /> MENTOR ON SET
            </span>
            <img
              src="/olajideailabsceo.png"
              alt="Olajide Igbalaye"
              className="hero-photo-img"
            />
            <div className="hero-photo-overlay" />
            <div className="hero-photo-caption">
              <span className="hero-photo-role">FOUNDER &amp; MENTOR</span>
              <strong className="hero-photo-name">Olajide Igbalaye</strong>
            </div>
          </motion.div>

          <motion.div
            className="floating-chip"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          >
            <OrganicBlob
              path={BLOB_PATHS.ref2}
              label="YT"
              tintIndex={1}
              fontSize={18}
              className="size-10"
            />
            <span>
              Kit: <strong>Phone + CapCut</strong>
            </span>
          </motion.div>

          <div className="crosshair crosshair-a">+</div>
          <div className="crosshair crosshair-b">+</div>
          <div className="art-label label-a">01 / PHONE FIRST</div>
          <div className="art-label label-b">02 / EARN IN USD</div>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker">
        <div className="container ticker-inner">
          <span>FACELESS YOUTUBE ON A PHONE</span>
          <span>CAPCUT + FREE AI VOICEOVER</span>
          <span>ADSENSE PAYS IN USD</span>
        </div>
      </div>

      {/* Reality Check */}
      <section className="section reality-section" id="reality">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-number">01 / THE REALITY CHECK</span>
              <h2>
                What you keep hearing about
                <br />
                faceless YouTube.
                <br />
                <em>What is actually true.</em>
              </h2>
            </div>
            <p>
              Every faceless YouTube guide assumes a PC, paid software, and a
              foreign payout. This is for everyone else.
            </p>
          </div>

          <div className="reality-matrix">
            {ytRealityModules.map((module, idx) => (
              <div className="reality-module group" key={idx}>
                <div className="reality-side-noise">
                  <BlobWatermark path={module.wmNoise} color="#F59E0B" />
                  <div className="reality-meta">
                    <span className="reality-tag-noise">
                      {module.noise.tag}
                    </span>
                    <span className="reality-status-badge noise">
                      {module.noise.status}
                    </span>
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

                <div className="reality-conduit">
                  <span className="reality-conduit-pill">VS</span>
                  <span className="reality-conduit-arrow">→</span>
                </div>

                <div className="reality-side-ship">
                  <BlobWatermark path={module.wmShip} color="#10B981" />
                  <div className="reality-meta">
                    <span className="reality-tag-ship">
                      {module.ship.tag}
                    </span>
                    <span className="reality-status-badge ship">
                      {module.ship.status}
                    </span>
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

      {/* Video */}
      <section className="section" id="video">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-number">02 / WATCH THE WORKFLOW</span>
              <h2>
                A real look at the
                <br />
                <em>phone-to-YouTube process.</em>
              </h2>
            </div>
            <p>
              Sixty seconds of the actual workflow, from recording to upload. No
              studio, no PC.
            </p>
          </div>

          {/* TODO: replace this linked frame with a real YouTube iframe embed once you have a walkthrough video.
              Example: <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Faceless YouTube workflow" allowFullScreen />
              Then drop a real YouTube Studio screenshot (subs + watch hours) nearby as social proof. */}
          <a
            className="yt-video-frame"
            href={links.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="Watch the workflow on YouTube"
          >
            <span className="yt-video-play" aria-hidden="true" />
            <span className="yt-video-caption">
              <span>WATCH THE WORKFLOW</span>
              <b>60 SECONDS</b>
            </span>
          </a>
        </div>
      </section>

      {/* Course cross-link to the Academy catalog */}
      <section className="academy-preview">
        <div className="container academy-preview-inner">
          <OrganicBlob
            path={BLOB_PATHS.ebook1}
            label="AI"
            tintIndex={1}
            fontSize={16}
          />
          <div className="academy-preview-copy">
            <span className="section-number">THE COURSE</span>
            <h2>AI Video Content Creation.</h2>
            <p>
              This is the full course, from niche to publish, phone first and
              free tools only. It also sits in the Academy catalog next to our
              other AI tracks.
            </p>
          </div>
          <a className="button button-ghost" href="/academy">
            See it in the Academy →
          </a>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section training-section" id="curriculum">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-number">03 / THE CURRICULUM</span>
              <h2>
                The path from blank channel
                <br />
                <em>to your first payout.</em>
              </h2>
            </div>
            <p>
              Each step is built and tested on a phone. Follow them in order,
              from niche selection to a second channel.
            </p>
          </div>

          <div className="academy-program-grid">
            {curriculum.map((c) => (
              <article className="academy-program-card" key={c.number}>
                <OrganicBlob
                  path={c.path}
                  label={c.number}
                  tintIndex={c.tintIndex}
                />
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="section" id="monetization">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-number">04 / HOW YOU GET PAID</span>
              <h2>
                The rails that actually
                <br />
                <em>reach your account.</em>
              </h2>
            </div>
            <p>
              YouTube is one of the few platforms that pays African creators in
              dollars. Here is the full stack, and how it fits together.
            </p>
          </div>

          <div className="academy-program-grid">
            {monetization.map((m) => (
              <article className="academy-program-card" key={m.number}>
                <OrganicBlob
                  path={m.path}
                  label={m.number}
                  tintIndex={m.tintIndex}
                />
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section outcomes" id="outcomes">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-number">05 / WHAT YOU LEAVE WITH</span>
              <h2>
                Walk away with
                <br />
                <em>real assets.</em>
              </h2>
            </div>
            <p>
              Not theory. By the end of the cohort you have a working channel and
              the systems to repeat it.
            </p>
          </div>

          <div className="outcomes-grid">
            {outcomes.map((o, i) => (
              <div className="outcome" key={o}>
                <OrganicBlob
                  path={BLOB_PATHS[`framework${(i % 4) + 1}`]}
                  tintIndex={(i % 4) as 0 | 1 | 2 | 3}
                  variant="solution"
                />
                <span>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="lead-magnet" id="starter-kit">
        <div className="container">
          <div className="lead-magnet-inner">
            <BlobWatermark path={BLOB_PATHS.wmHero} color="#F59E0B" />
            <div className="lead-magnet-content">
              <span className="lead-magnet-kicker">FREE STARTER KIT</span>
              <h2>
                The Faceless YouTube
                <br />
                <em>Starter Kit.</em>
              </h2>
              <p>
                A niche shortlist that actually monetizes, 30 script templates
                you can reuse, and the free tools list with no dollar card
                required. It is pinned in the Telegram Knowledge Hub.
              </p>
              <div className="lead-magnet-kit">
                <span>NICHE SHORTLIST</span>
                <span>30 SCRIPT TEMPLATES</span>
                <span>FREE TOOLS LIST</span>
                <span>NO DOLLAR CARD</span>
              </div>
              <div className="hero-actions">
                <a
                  className="button"
                  href={links.telegram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get the free kit in the hub →
                </a>
                <a
                  className="button button-glass"
                  href={links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  Join the WhatsApp room
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training tiers */}
      {/* TODO: set the confirmed cohort price once agreed, then replace 'APPLICATION-BASED' with it, e.g. ₦45,000. */}
      <section className="section training-section" id="cohort">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-number">06 / TRAINING PROGRAMS</span>
              <h2>
                Where do you
                <br />
                <em>want to start?</em>
              </h2>
            </div>
            <p>
              Pick the option that matches where you are right now, from free
              starter kit to private review.
            </p>
          </div>

          <div className="tiers">
            {ytTiers.map((tier) => (
              <motion.article
                whileHover={{ y: -4 }}
                className={`tier ${tier.featured ? 'tier-featured' : ''} group`}
                key={tier.name}
              >
                <BlobWatermark
                  path={tier.wmPath}
                  color={tier.featured ? '#F59E0B' : '#94A3B8'}
                />
                {tier.featured && (
                  <span className="popular">MOST POPULAR FOR BUILDERS</span>
                )}
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

      {/* FAQ */}
      <section className="faq-section container" id="faq">
        <div className="faq-title">
          <span className="section-number">07 / QUICK CLARITY</span>
          <h2>
            Real questions,
            <br />
            <em>straight answers.</em>
          </h2>
        </div>

        <div className="faq-list">
          {ytFaqs.map(([q, a], i) => (
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

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <a href="/" className="brand">
            <img src="/olajideailab.png" alt="Olajide AILabs" />
          </a>
          <p>
            Faceless YouTube training, built for African creators. Phone first,
            free tools, payouts that reach your bank.
          </p>
          <div className="footer-social">
            <a href={links.youtube} target="_blank" rel="noreferrer">
              YouTube (@remotejd)
            </a>
            <a href={links.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href={links.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
          <small>© 2026 Olajide AILabs. All rights reserved.</small>
        </div>
      </footer>
    </main>
  )
}
