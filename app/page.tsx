import Link from "next/link";

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-semibold text-sm tracking-tight text-gray-90">
            HYPER INTELLIGENT
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-50">
          <a href="#services" className="hover:text-gray-90 transition-colors">Services</a>
          <a href="#process" className="hover:text-gray-90 transition-colors">How It Works</a>
          <a href="#about" className="hover:text-gray-90 transition-colors">About</a>
        </nav>
        <Link
          href="#contact"
          className="bg-gray-90 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-80 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-20 text-xs text-gray-50 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            AI Implementation for Small & Mid-Sized Businesses
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-90 leading-[1.1] mb-6">
            We don&apos;t consult.<br />
            We build.
          </h1>
          <p className="text-xl text-gray-50 leading-relaxed mb-10 max-w-2xl">
            Hyper Intelligent integrates AI into your operations — not with slide decks, but with working systems. Workflow automation, AI agents, smart integrations. Results in weeks, not quarters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-bright transition-colors text-center"
            >
              See How It Works
            </Link>
            <Link
              href="#services"
              className="border border-gray-30 text-gray-90 font-medium px-6 py-3 rounded-full hover:bg-gray-20 transition-colors text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-24 px-6 bg-gray-90 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-30 mb-4">The Problem</p>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              You&apos;ve heard the AI pitch.<br />Where&apos;s the AI product?
            </h2>
            <p className="text-gray-30 leading-relaxed mb-6">
              Most AI consulting firms hand you a 200-slide strategy deck and wish you luck. You&apos;re left to figure out implementation yourself — if you even get that far.
            </p>
            <p className="text-gray-30 leading-relaxed">
              Meanwhile, your competitors are already running AI-powered customer service, automated workflows, and intelligent decision systems. While you&apos;re still waiting for Phase 1.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Consultants disappear after the report", cross: true },
              { label: "AI tools sitting unused because no one knows how to integrate them", cross: true },
              { label: "Months of planning, zero working systems", cross: true },
              { label: "Employees overwhelmed, not empowered", cross: true },
            ].map(({ label }) => (
              <div key={label} className="flex items-start gap-3 text-gray-30">
                <span className="text-red-400 mt-0.5">✗</span>
                <span>{label}</span>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-80 flex items-start gap-3 text-white font-medium">
              <span className="text-accent mt-0.5">✓</span>
              <span>Hyper Intelligent builds. Then we stay until it works.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      number: "01",
      title: "AI Strategy & Roadmapping",
      description:
        "We audit your current operations, identify where AI creates the most leverage, and build a clear implementation roadmap. No fluff — just prioritized opportunities ranked by impact and feasibility.",
    },
    {
      number: "02",
      title: "Workflow Automation",
      description:
        "We find the repetitive work eating your team's time and automate it. Email parsing, data entry, reporting, approvals — whatever your people are doing manually, we make it instant.",
    },
    {
      number: "03",
      title: "AI Agent Integration",
      description:
        "Custom AI agents that handle real business tasks: customer inquiries, lead qualification, document processing, internal searches. Agents trained on your data, integrated into your tools.",
    },
    {
      number: "04",
      title: "AI Training & Adoption",
      description:
        "Your team won't adopt AI they don't understand. We train your people to work with AI fluently — not just use it, but know when to trust it and when to override it.",
    },
    {
      number: "05",
      title: "Ongoing AI Management",
      description:
        "AI systems drift. Models go stale. We stay on retainer to monitor, update, and optimize your AI stack so it keeps delivering as your business changes.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-50 mb-4">What We Do</p>
        <h2 className="text-4xl font-bold text-gray-90 mb-16">Full-stack AI integration</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ number, title, description }) => (
            <div key={number} className="p-6 rounded-2xl border border-gray-20 hover:border-gray-30 transition-colors">
              <div className="text-xs text-gray-30 mb-4">{number}</div>
              <h3 className="font-semibold text-gray-90 mb-3 leading-snug">{title}</h3>
              <p className="text-sm text-gray-50 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We spend 2–3 days in your business — interviews, workflows, data sources. We learn what your people actually do all day.",
    },
    {
      number: "02",
      title: "Build",
      description:
        "We build the highest-leverage AI system first — the one that creates immediate time savings or revenue impact. Typically live within 2–4 weeks.",
    },
    {
      number: "03",
      title: "Integrate",
      description:
        "We don't hand you a tool and disappear. We integrate AI into exactly where your team works — your email, your CRM, your database.",
    },
    {
      number: "04",
      title: "Train & Launch",
      description:
        "We train your team on how to use it, what to trust, and how to flag when it's wrong. Launch is when they actually use it, not when we hand it off.",
    },
    {
      number: "05",
      title: "Measure & Optimize",
      description:
        "We track the impact. Time saved, tasks automated, errors reduced. You'll have a dashboard and a review cadence, not a mystery.",
    },
  ];

  return (
    <section id="process" className="py-24 px-6 bg-gray-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-50 mb-4">How It Works</p>
        <h2 className="text-4xl font-bold text-gray-90 mb-16">From discovery to results in weeks</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map(({ number, title, description }) => (
            <div key={number}>
              <div className="text-5xl font-bold text-gray-20 mb-4">{number}</div>
              <h3 className="font-semibold text-gray-90 mb-2">{title}</h3>
              <p className="text-sm text-gray-50 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-50 mb-4">About</p>
            <h2 className="text-4xl font-bold text-gray-90 leading-tight mb-6">
              Built by people who&apos;ve actually shipped AI products
            </h2>
            <p className="text-gray-50 leading-relaxed mb-6">
              Hyper Intelligent was founded on a simple frustration: too many AI consultancies sell certainty and deliver decks. We came up through AI product development — we've built the systems we're asking clients to trust us with.
            </p>
            <p className="text-gray-50 leading-relaxed">
              We work with a small number of clients at a time. Not because we're small — because quality AI integration requires real attention. We take on clients we can deliver transformative results for, not just check a box.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { metric: "2–4 weeks", label: "to first working AI system" },
              { metric: "10–200", label: "employee businesses we work with" },
              { metric: "Unlimited", label: "support during engagement" },
            ].map(({ metric, label }) => (
              <div key={label} className="p-6 rounded-2xl bg-gray-90 text-white">
                <div className="text-3xl font-bold mb-1">{metric}</div>
                <div className="text-sm text-gray-30">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-90 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-30 mb-4">Contact</p>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Ready to stop planning and start building?
            </h2>
            <p className="text-gray-30 leading-relaxed mb-8">
              Tell us about your business — what&apos;s slowing you down, what you wish was automated, where AI could change the game for you. We&apos;ll give you a straight answer on whether we&apos;re the right fit.
            </p>
            <div className="space-y-3 text-sm text-gray-30">
              <div>
                <span className="text-gray-30">Email:</span>{" "}
                <a href="mailto:hello@hyperintelligent.com" className="text-white hover:text-accent transition-colors">
                  hello@hyperintelligent.com
                </a>
              </div>
              <div>
                <span className="text-gray-30">Response time:</span>{" "}
                <span className="text-white">Within 24 hours</span>
              </div>
            </div>
          </div>
          <form className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-30 mb-2">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your company"
                className="w-full bg-gray-80 border border-gray-70 rounded-xl px-4 py-3 text-white placeholder-gray-50 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-30 mb-2">
                Work Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-gray-80 border border-gray-70 rounded-xl px-4 py-3 text-white placeholder-gray-50 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-30 mb-2">
                Where are you stuck with AI?
              </label>
              <textarea
                rows={4}
                placeholder="Tell us briefly what you're trying to do, what's in your way, or what you've already tried..."
                className="w-full bg-gray-80 border border-gray-70 rounded-xl px-4 py-3 text-white placeholder-gray-50 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white font-medium py-3 rounded-full hover:bg-accent-bright transition-colors"
            >
              Send Message
            </button>
            <p className="text-xs text-gray-30 text-center">
              No sales pitch. Just a straight conversation about whether we can help.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-semibold text-sm text-gray-90">HYPER INTELLIGENT</span>
        </div>
        <p className="text-xs text-gray-30">
          © 2026 Hyper Intelligent. AI that actually works.
        </p>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
