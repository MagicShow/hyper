import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const PRICE = "$299";

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-h-bolt.svg" alt="Hyper Intelligent" width={32} height={32} />
          <span className="font-semibold text-sm tracking-tight text-gray-90">
            HYPER INTELLIGENT
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-50">
          <a href="#consultation" className="hover:text-gray-90 transition-colors">Consultation</a>
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
            AI for Local & Small Business — Phone Agents, Agents & Websites
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-90 leading-[1.1] mb-6">
            Your phone never stops ringing.<br />
            Our AI agents turn every ring into revenue.
          </h1>
          <p className="text-xl text-gray-50 leading-relaxed mb-10 max-w-2xl">
            Booking appointments, qualifying leads, and supporting customers — while you focus on running your business. AI phone agents that actually work, built for local shops and growing companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-bright transition-colors text-center"
            >
              Book a Free Call
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
              You&apos;re busy running your business.<br />AI should be working for you.
            </h2>
            <p className="text-gray-30 leading-relaxed mb-6">
              Every big company has a team for this. You have yourself, maybe a few employees, and a to-do list that never ends. Meanwhile, calls go to voicemail, follow-ups slip through the cracks, and your website is just a digital business card.
            </p>
            <p className="text-gray-30 leading-relaxed">
              You don&apos;t need another app. You need AI that runs in the background — answering your phone, following up with leads, and bringing in revenue while you focus on what only you can do.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Calls going to voicemail — and never getting returned", cross: true },
              { label: "Leads that come in but slip through the cracks", cross: true },
              { label: "Social media and website that just... sit there", cross: true },
              { label: "No time to figure out AI — you're busy running the business", cross: true },
            ].map(({ label }) => (
              <div key={label} className="flex items-start gap-3 text-gray-30">
                <span className="text-red-400 mt-0.5">✗</span>
                <span>{label}</span>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-80 flex items-start gap-3 text-white font-medium">
              <span className="text-accent mt-0.5">✓</span>
              <span>Hyper Intelligent sets up the AI, connects it to your tools, and keeps it running.</span>
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
      title: "AI Phone Agents",
      description:
        "A real voice picks up your calls — 24/7. Answers questions, books appointments, takes orders, routes leads. Miss zero calls again, even at 11pm on a Sunday.",
    },
    {
      number: "02",
      title: "AI Agent Solutions",
      description:
        "Smart digital workers that handle your repetitive tasks — qualifying leads, following up, managing appointments, answering customer questions. Always on, never burns out.",
    },
    {
      number: "03",
      title: "Websites & Lead Gen",
      description:
        "Fast-loading, conversion-focused websites built to turn visitors into paying customers. Landing pages, local business sites, and lead capture systems that actually work.",
    },
    {
      number: "04",
      title: "AI Integration & Migration",
      description:
        "We connect AI into your existing tools and workflows — your phone system, scheduling software, CRM, email. It all works together, seamlessly.",
    },
    {
      number: "05",
      title: "Ongoing Support",
      description:
        "We don't disappear after launch. Monthly support to monitor, update, and improve your AI systems as your business grows.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-50 mb-4">What We Do</p>
        <h2 className="text-4xl font-bold text-gray-90 mb-16">AI that actually runs your business</h2>
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
      title: "Listen",
      description:
        "We learn your business — how you take calls, how you follow up, what's costing you time and money. One short call with you does it.",
    },
    {
      number: "02",
      title: "Build",
      description:
        "We build your AI system and get it live fast — most projects done in 1–2 weeks. Phone agent, website, or agent workflow.",
    },
    {
      number: "03",
      title: "Connect",
      description:
        "We hook it into your existing tools — your phone, calendar, CRM, website. It works the way you work.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "We don't hand off and walk away. We stay on until it's running right and your team actually trusts it.",
    },
    {
      number: "05",
      title: "Support",
      description:
        "Monthly support keeps everything running and improving. Your AI grows as your business does.",
    },
  ];

  return (
    <section id="process" className="py-24 px-6 bg-gray-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-50 mb-4">How It Works</p>
        <h2 className="text-4xl font-bold text-gray-90 mb-16">From first call to working AI in days</h2>
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

function Consultation() {
  return (
    <section id="consultation" className="py-24 px-6 bg-accent text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60 mb-4">AI Business Solutions</p>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Not sure where AI fits your business?
              <br />Let&apos;s map it out together.
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Book a 45-minute strategy call with us. We&apos;ll hear about your business, identify the biggest time-wasters and bottlenecks, and assess where AI can make the biggest impact — fast.
            </p>
            <p className="text-white/80 leading-relaxed">
              You walk away with a concrete, actionable AI automation plan — custom to your business. No fluff, no pitch. Just clarity on what to do next.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="mb-6">
              <div className="text-5xl font-bold mb-2">$299</div>
              <div className="text-sm text-white/60">45-Minute Strategy Call + AI Automation Plan</div>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Deep dive into your business operations and pain points",
                "Identify the highest-impact AI opportunities for your workflow",
                "Receive a written AI automation plan — delivered after the call",
                "Specific tool recommendations and implementation roadmap",
                "Clear pricing on next steps — no hidden costs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                  <span className="text-white mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://cal.com/hyperintelligent/45min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-accent font-semibold py-3 rounded-full text-center hover:bg-white/90 transition-colors"
            >
              Book Your ${PRICE} Strategy Call →
            </a>
            <p className="text-xs text-white/50 text-center mt-4">
              Or <Link href="/consultation" className="underline hover:text-white/80">see the full consultation page</Link> with process details, FAQ, and calendar booking.
            </p>
          </div>
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
              Built for the businesses that keep communities running
            </h2>
            <p className="text-gray-50 leading-relaxed mb-6">
              Hyper Intelligent was founded on a simple frustration: local shops, service businesses, and growing companies get ignored by AI. All the tools are built for enterprise. We built Hyper for you.
            </p>
            <p className="text-gray-50 leading-relaxed">
              We work with a small number of clients at a time — because quality AI requires real attention. You get a team that answers your calls, builds what you need, and sticks around.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { metric: "1–2 weeks", label: "to first live AI system" },
              { metric: "1–100", label: "employee businesses we work with" },
              { metric: "24/7", label: "phone agents available" },
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
              Ready to stop doing everything yourself?
            </h2>
            <p className="text-gray-30 leading-relaxed mb-8">
              Tell us about your business — what&apos;s slowing you down, what you wish was automated, where AI could change the game for you. We&apos;ll give you a straight answer on whether we&apos;re the right fit.
            </p>
            <div className="space-y-3 text-sm text-gray-30">
              <div>
                <span className="text-gray-30">Email:</span>{" "}
                <a href="mailto:scott@hyperintelligent.dev" className="text-white hover:text-accent transition-colors">
                  scott@hyperintelligent.dev
                </a>
              </div>
              <div>
                <span className="text-gray-30">Response time:</span>{" "}
                <span className="text-white">Within 24 hours</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-semibold text-sm text-gray-90">HYPER INTELLIGENT</span>
          </div>
          <p className="text-xs text-gray-30">Woodburn, OR</p>
          <a href="tel:+19712432063" className="text-xs text-gray-30 hover:text-gray-90 transition-colors">971-243-2063</a>
          <a href="mailto:scott@hyperintelligent.dev" className="text-xs text-gray-30 hover:text-gray-90 transition-colors">scott@hyperintelligent.dev</a>
        </div>
        <p className="text-xs text-gray-30 self-start md:self-auto">
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
      <Consultation />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
