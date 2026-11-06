'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, Check, ChevronDown, Globe2, Menu, Send, Sparkles, X, Zap } from 'lucide-react'

const links = {
  nestuge: '#',
  telegram: '#',
  whatsapp: '#',
}

const tiers = [
  {
    number: '01',
    name: 'AI Money Lab',
    type: 'Free Live Masterclass',
    description: 'For curious beginners ready to move from watching to building.',
    price: 'FREE',
    features: ['Smartphone-first setup', 'Live prompt teardowns', 'Zero laptop needed', 'Telegram group access'],
    cta: 'Join next session',
  },
  {
    number: '02',
    name: 'ShipFastWithAI',
    type: '4-week intensive mentorship',
    description: 'For serious builders who want to launch a real digital asset fast.',
    price: 'ENROLLMENT OPEN',
    features: ['1-on-1 execution review', 'Digital product framework', 'Sales funnel on Nestuge', 'Direct WhatsApp access'],
    cta: 'Apply for cohort',
    featured: true,
  },
  {
    number: '03',
    name: 'Executive & B2B',
    type: 'AI consultation',
    description: 'For teams and leaders who need clarity, capability, and leverage.',
    price: 'BESPOKE',
    features: ['Custom workflow automation', 'AI literacy workshops', 'Private strategy session'],
    cta: 'Book strategy session',
  },
]

const faqs = [
  ['Do I need a laptop to join?', 'No. Start with the phone you already have. The core workflows are smartphone-first, so a laptop is useful later—not a reason to keep waiting.'],
  ['Is this for complete beginners?', 'Yes. This is for the person hearing “learn AI” everywhere but needing a clear first step, a realistic path, and someone who understands the Nigerian-to-Spain experience.'],
  ['What happens after I join the community?', 'You get daily mobile prompts, practical sessions, event alerts, and a network of Nigerians in Spain actively building—not just consuming.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#top" className="brand" aria-label="Olajide AILabs home">
            <span className="brand-mark"><span>O</span></span>
            <span>Olajide <b>AI</b>Labs</span>
          </a>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#training" onClick={() => setMenuOpen(false)}>Training tiers</a>
            <a href="#toolkits" onClick={() => setMenuOpen(false)}>eBooks</a>
            <a href="#community" onClick={() => setMenuOpen(false)}>Ecosystem</a>
            <a className="nav-mobile-cta" href="#community" onClick={() => setMenuOpen(false)}>Join free community <ArrowUpRight size={15} /></a>
          </div>
          <a className="button button-small nav-cta" href="#community">Join free community <ArrowUpRight size={15} /></a>
          <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}><span className="live-dot" /> For Nigerians in Spain building beyond the 9–5</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .1 }}>Turn your<br /><em>AI curiosity</em><br />into income<br />in Spain.</motion.h1>
          <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6, delay: .3 }}>No more hearing “learn AI” without knowing where to start. Learn practical, smartphone-first workflows to build digital services, products, and income streams from Spain—with the perspective of a Nigerian builder.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .4 }}><a className="button" href="#training">Explore training tiers <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#community"><Send size={15} /> Join Telegram & WhatsApp</a></motion.div>
          <div className="proof"><div className="avatar-stack"><span>O</span><span>A</span><span>I</span><span>+</span></div><span>Built for <strong>Nigerians in Spain</strong> ready to move from survival mode to ownership</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract execution dashboard illustration">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <motion.div className="orbit-card orbit-main" animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><div className="orbit-card-top"><span className="mini-label">BUILD / 001</span><span className="status"><i /> LIVE</span></div><div className="orbit-title">Your next<br /><span>digital asset</span></div><div className="progress"><span /><b>72%</b></div><div className="orbit-footer"><span>EXECUTION SCORE</span><strong>08.4</strong></div></motion.div>
          <motion.div className="orbit-card orbit-small" animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: .5 }}><Sparkles size={15} /><span>Prompt → Product</span><strong>+124%</strong></motion.div>
          <div className="crosshair crosshair-a">+</div><div className="crosshair crosshair-b">+</div><div className="art-label label-a">01 / CLARITY</div><div className="art-label label-b">02 / SHIP</div>
        </div>
      </section>

      <div className="ticker"><div className="container ticker-inner"><span>THE OLAJIDE AILABS METHOD</span><span>CLARITY <b>—</b> EXECUTION <b>—</b> LEVERAGE <b>—</b> OWNERSHIP</span><Zap size={14} /></div></div>

      <section className="section container" id="toolkits"><div className="section-heading"><div><span className="section-number">01 — DIGITAL ASSETS</span><h2>Frameworks that<br /><em>move you forward.</em></h2></div><p>Skip the loud online advice. Get the exact prompts, workflows, and accountability to turn what you know into something useful, sellable, and yours.</p></div><div className="toolkit-grid"><motion.a whileHover={{ y: -4 }} className="toolkit-card toolkit-dark" href={links.nestuge}><div className="card-top"><span className="card-tag">AVAILABLE NOW <span>• NESTUGE</span></span><ArrowUpRight /></div><div className="toolkit-art"><div className="book"><span>O</span><strong>THE MOBILE<br />AI<br /><i>MONETIZATION</i><br />PLAYBOOK</strong><small>O.AI / 001</small></div></div><div className="card-bottom"><div><h3>The Mobile AI<br />Monetization Playbook</h3><p>The step-by-step framework to build, launch, and automate digital product sales directly from your smartphone.</p></div><span className="circle-arrow"><ArrowUpRight size={18} /></span></div></motion.a><motion.a whileHover={{ y: -4 }} className="toolkit-card toolkit-light" href="#training"><div className="card-top"><span className="card-tag">OFFICIAL RELEASE <span>• COMING SOON</span></span><ArrowUpRight /></div><div className="toolkit-art prompt-art"><div className="prompt-window"><div className="window-bar"><i /><i /><i /></div><div className="prompt-line">&gt; <span>design_prompt</span>( )</div><div className="prompt-line muted">// turn ideas into income</div><div className="prompt-line gold">&gt; execute<span className="blink">_</span></div></div></div><div className="card-bottom"><div><h3>Smartphone Prompt<br />Engineering & AI Workflows</h3><p>Zero-theory prompt architectures to turn free AI tools into daily income assets.</p></div><span className="circle-arrow"><ArrowUpRight size={18} /></span></div></motion.a></div></section>

      <section className="section training-section" id="training"><div className="container"><div className="section-heading"><div><span className="section-number">02 — PROGRAMS</span><h2>Choose your<br /><em>next move.</em></h2></div><p>Whether you are working shifts, studying, freelancing, or building after hours, choose the next practical move for your life in Spain.</p></div><div className="tiers">{tiers.map((tier, index) => <motion.article whileHover={{ y: -4 }} className={`tier ${tier.featured ? 'tier-featured' : ''}`} key={tier.name}>{tier.featured && <span className="popular">MOST POPULAR</span>}<div className="tier-number">{tier.number}</div><div className="tier-heading"><h3>{tier.name}</h3><span>{tier.type}</span></div><p className="tier-description">{tier.description}</p><div className="tier-price">{tier.price}</div><ul>{tier.features.map(feature => <li key={feature}><Check size={15} /> {feature}</li>)}</ul><a className={`button ${tier.featured ? '' : 'button-ghost'}`} href="#community">{tier.cta} <ArrowUpRight size={16} /></a></motion.article>)}</div></div></section>

      <section className="community-section" id="community"><div className="container community-inner"><div><span className="section-number">03 — THE ECOSYSTEM</span><h2>Build with people<br />who <em>ship.</em></h2><p>A focused room for Nigerians in Spain who are done with vague motivation. Get practical prompts, live sessions, honest feedback, and people who understand the move.</p></div><div className="community-actions"><a href={links.telegram} className="community-card"><span className="community-icon"><Send /></span><span><strong>Telegram Knowledge Hub</strong><small>Join the channel →</small></span><ArrowUpRight /></a><a href={links.whatsapp} className="community-card"><span className="community-icon whatsapp">◔</span><span><strong>WhatsApp VIP Community</strong><small>Join the broadcast & group →</small></span><ArrowUpRight /></a></div></div></section>

      <section className="faq-section container"><div className="faq-title"><span className="section-number">04 — QUICK CLARITY</span><h2>Questions,<br /><em>answered.</em></h2></div><div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>0{i + 1}</span><strong>{q}</strong><ChevronDown /></button>{openFaq === i && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>{a}</motion.p>}</div>)}</div></section>

      <footer className="footer"><div className="container footer-inner"><a href="#top" className="brand"><span className="brand-mark"><span>O</span></span><span>Olajide <b>AI</b>Labs</span></a><p>Practical, zero-fluff AI engineering<br />& digital monetization.</p><div className="footer-social"><a href="#top" aria-label="Website"><Globe2 /></a><a href="#top" aria-label="Business profile"><BriefcaseBusiness /></a></div><small>© 2026 Olajide AILabs. All rights reserved.</small></div></footer>
    </main>
  )
}
