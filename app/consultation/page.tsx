import Image from "next/image";
import Link from "next/link";

// ─── PROPS ────────────────────────────────────────────────────────────────────
export const CALCOM_URL = "https://calendly.com/scott-hyperintelligent/30min";
export const PRICE = "$499";
export const CALL_DURATION = "45 minutes";

const BENEFITS = [
  "Deep dive into your business operations and bottlenecks",
  "Identify the highest-impact AI opportunities for your workflow",
  "Receive a written AI automation plan — delivered after the call",
  "Specific tool recommendations and implementation roadmap",
  "Clear pricing on next steps — no hidden costs",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Book your call",
    description: "Choose a time that works for you using our calendar. You'll be charged $499 to secure your spot.",
  },
  {
    step: "02",
    title: "We prepare",
    description: "Before the call, we'll review any context you share — your website, current tools, biggest pain points.",
  },
  {
    step: "03",
    title: "The strategy call",
    description: "45 minutes with us. We'll map your operations, find the biggest wins, and identify what AI should do first.",
  },
  {
    step: "04",
    title: "Your AI plan delivered",
    description: "Within 48 hours, you'll receive a written AI automation plan — specific to your business, ready to act on.",
  },
];

const FAQ = [
  {
    q: "What kind of businesses do you work with?",
    a: "We work with service businesses, local shops, and growing companies with 1–100 employees. If you're a founder or operator who's drowning in repetitive tasks, this is for you.",
  },
  {
    q: "Is the $499 refundable?",
    a: "The $499 fee covers the consultation and your custom plan. If you show up and we don't deliver a useful plan, we'll work with you to make it right.",
  },
  {
    q: "Do I need to prepare for the call?",
    a: "Not much — but sharing your website URL or a brief description of what you do helps us come prepared. The more context you give us, the better your plan.",
  },
  {
    q: "What happens after I get the plan?",
    a: "You're free to implement on your own, hire us to build it, or do nothing. The plan is yours. There's no obligation.",
  },
  {
    q: "How long do I have to act on the plan?",
    a: "There's no expiration. Take it to any vendor, use it as internal guidance, or come back to us when you're ready.",
  },
];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

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
        <nav className="flex items-center gap-6 text-sm text-gray-50">
          <Link href="/" className="hover:text-gray-90 transition-colors">Home</Link>
          <Link href="/#services" className="hover:text-gray-90 transition-colors">Services</Link>
          <a href={CALCOM_URL} target="_blank" rel="noopener noreferrer">
            <span className="bg-accent text-white text-sm px-4 py-2 rounded-full hover:bg-accent-bright transition-colors">
              Book a Call
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gray-90 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-white/60 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            AI Business Solutions — Strategy Call
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Not sure where AI fits your business?<br />
            Let&apos;s map it out together.
          </h1>
          <p className="text-lg text-gray-30 leading-relaxed mb-8 max-w-2xl">
            Book a 45-minute strategy call. We&apos;ll audit your operations, identify the biggest AI opportunities, and deliver a written AI automation plan — custom to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={CALCOM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white font-semibold px-6 py-3 rounded-full hover:bg-accent-bright transition-colors text-center"
            >
              Book Your {PRICE} Strategy Call →
            </a>
            <span className="text-sm text-gray-30 self-center">No pitch. Just a plan you can actually use.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-50 mb-4">What You Get</p>
            <h2 className="text-4xl font-bold text-gray-90 leading-tight mb-6">
              A strategy call that actually produces something useful
            </h2>
            <p className="text-gray-50 leading-relaxed mb-6">
              Most consulting calls are a pitch dressed up as a conversation. This isn&apos;t that. We spend 45 minutes understanding your business — what&apos;s slowing you down, where AI could have the biggest impact, what&apos;s actually worth doing first.
            </p>
            <p className="text-gray-50 leading-relaxed">
              Then we build you a written AI automation plan you can take anywhere. Use it to hire us, hire someone else, or build it yourself. But you&apos;ll leave with clarity.
            </p>
          </div>
          <div className="bg-gray-10 rounded-2xl p-8 border border-gray-20">
            <div className="mb-6">
              <div className="text-5xl font-bold text-gray-90">{PRICE}</div>
              <div className="text-sm text-gray-50 mt-1">45-Minute Strategy Call + AI Automation Plan</div>
            </div>
            <ul className="space-y-4">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-70">
                  <span className="text-accent mt-0.5 shrink-0 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-20">
              <a
                href={CALCOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-90 text-white font-semibold py-3 rounded-full text-center hover:bg-gray-80 transition-colors"
              >
                View Available Times →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-gray-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-50 mb-4">How It Works</p>
        <h2 className="text-4xl font-bold text-gray-90 mb-16">From booking to your AI plan in 4 steps</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map(({ step, title, description }) => (
            <div key={step}>
              <div className="text-4xl font-bold text-accent mb-4">{step}</div>
              <h3 className="font-semibold text-gray-90 mb-2">{title}</h3>
              <p className="text-sm text-gray-50 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-50 mb-4 text-center">Common Questions</p>
        <h2 className="text-4xl font-bold text-gray-90 mb-12 text-center">Before you book</h2>
        <div className="space-y-6">
          {FAQ.map(({ q, a }) => (
            <div key={q} className="border-b border-gray-20 pb-6">
              <h3 className="font-semibold text-gray-90 mb-3">{q}</h3>
              <p className="text-gray-50 leading-relaxed text-sm">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 px-6 bg-gray-90 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold leading-tight mb-6">
          Ready to stop guessing what AI should do for your business?
        </h2>
        <p className="text-gray-30 leading-relaxed mb-10">
          Book your strategy call. In 45 minutes, we&apos;ll give you a plan that actually makes sense.
        </p>
        <a
          href={CALCOM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-accent-bright transition-colors text-lg"
        >
          Book Your {PRICE} Strategy Call →
        </a>
        <p className="text-xs text-gray-50 mt-4">Limited spots available — we work with a small number of clients at a time.</p>
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
        <div className="flex gap-4 text-xs text-gray-50">
          <Link href="/" className="hover:text-gray-90 transition-colors">Home</Link>
          <a href="mailto:hello@hyperintelligent.com" className="hover:text-gray-90 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ConsultationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatYouGet />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}