import Image from "next/image";
import Link from "next/link";

const CALCOM_URL = "https://calendly.com/scott-hyperintelligent/30min";
const STRIPE_AUTOMATION_URL = "https://buy.stripe.com/test-placeholder"; // Replace with real Stripe link
const STRIPE_BUNDLE_URL = "https://buy.stripe.com/test-placeholder";
const STRIPE_RETAINER_URL = "https://buy.stripe.com/test-placeholder";

const EXAMPLE_AUTOMATIONS = [
  {
    icon: "📞",
    title: "AI Phone Agents",
    description:
      "A real voice picks up every call — 24/7. Answers common questions, books appointments, takes orders, and routes urgent calls to you. Miss zero calls again.",
    examples: [
      "Dental office: patient books cleanings, confirms insurance, reschedules — without staff involvement",
      "HVAC company: after-hours emergency calls routed correctly, estimate requests captured as leads",
      "Law firm: intake calls qualified, consultations scheduled, urgent matters escalated",
    ],
  },
  {
    icon: "📬",
    title: "Automated Email & SMS Follow-Up",
    description:
      "Leads and customers get timely, personalized follow-ups without you lifting a finger. Sequences that feel human, run on autopilot.",
    examples: [
      "Realty group: new leads get a welcome series + property matches within 2 minutes of inquiry",
      "Fitness studio: trial expirations trigger personal check-in texts that recover 30% of lapsed members",
      "Home services: job completion triggers review request, referral program, and maintenance reminders",
    ],
  },
  {
    icon: "🤖",
    title: "AI Agent Workers",
    description:
      "Digital workers that handle specific business functions — research, data entry, lead qualification, content drafting. Always on, never calls in sick.",
    examples: [
      "Recruiting firm: agent screens resumes, scores candidates, and schedules top matches — 90% less time on sourcing",
      "E-commerce: agent monitors inventory, competitor pricing, and adjusts reorder alerts automatically",
      "Marketing agency: agent researches prospects, drafts personalized outreach sequences, flags warm leads",
    ],
  },
  {
    icon: "📊",
    title: "CRM & Data Automation",
    description:
      "Your CRM stays clean, current, and useful — automatically. Contacts enriched, deals updated, tasks created without manual entry.",
    examples: [
      "Sales team: new lead from any source auto-populates CRM, gets enrichment data, and enters correct sequence",
      "Insurance agency: policy renewals tracked, renewal sequences triggered 90 days out, conversion data surfaced",
      "Auto dealership: service department upsells automated based on vehicle mileage and service history",
    ],
  },
  {
    icon: "📅",
    title: "Scheduling & Booking Automation",
    description:
      "Calendar routing, appointment reminders, rescheduling, and prep notifications — all handled automatically so your team focuses on delivery.",
    examples: [
      "Medical spa: consultation bookings, intake forms, and reminder sequences run without front desk involvement",
      "Professional services: discovery call booking, proposal delivery, and onboarding scheduling fully automated",
      "Fitness coach: session scheduling, rescheduling with buffer logic, and prep reminders sent automatically",
    ],
  },
  {
    icon: "🛒",
    title: "E-Commerce & Transaction Automation",
    description:
      "Order processing, inventory triggers, supplier communication, and post-purchase sequences — running in the background while you focus on growth.",
    examples: [
      "Online retail: abandoned cart sequences, post-purchase upsell, and inventory reorder alerts automated",
      "D2C brand: customer inquiries answered with product recommendations and order tracking updates",
      "Wholesale business: PO generation, supplier follow-up, and delivery notifications automated",
    ],
  },
];

const RETAINER_FEATURES = [
  "Unlimited automations per month",
  "Dedicated AI agent worker for your account",
  "Priority build queue — automations live in days, not weeks",
  "Cross-tool integration across your entire stack",
  "Monthly strategy call to identify new automation opportunities",
  "Ongoing monitoring, tuning, and improvements",
  "Direct access to your automation team via Slack/email",
  "Monthly reporting on automation performance and ROI",
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
          <a href="/#pricing" className="hover:text-gray-90 transition-colors">Pricing</a>
          <a
            href={CALCOM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white text-sm px-4 py-2 rounded-full hover:bg-accent-bright transition-colors"
          >
            Book a Call
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
            AI Automation Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Automations that actually<br />move the needle for your business.
          </h1>
          <p className="text-lg text-gray-30 leading-relaxed mb-10 max-w-2xl">
            Not generic AI tools. Not prompts. Custom automations built for your specific workflow — designed to save hours, reduce dropped balls, and generate revenue while you sleep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CALCOM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white font-semibold px-6 py-3 rounded-full hover:bg-accent-bright transition-colors text-center"
            >
              Book Free Audit Call →
            </a>
            <a
              href="#services"
              className="border border-white/20 text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-center"
            >
              See Service Examples
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExampleAutomations() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-50 mb-4">What We Automate</p>
        <h2 className="text-4xl font-bold text-gray-90 mb-4">Real automations. Real results.</h2>
        <p className="text-gray-50 leading-relaxed mb-16 max-w-2xl">
          Here are examples of automations we&apos;ve built (and ones we can build for you). Every automation is custom — your workflow, your tools, your goals.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXAMPLE_AUTOMATIONS.map(({ icon, title, description, examples }) => (
            <div key={title} className="flex flex-col p-6 rounded-2xl border border-gray-20 hover:border-accent transition-colors">
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-semibold text-gray-90 mb-3 leading-snug">{title}</h3>
              <p className="text-base text-gray-70 leading-relaxed mb-6">{description}</p>
              <div className="mt-auto space-y-3">
                {examples.map((ex) => (
                  <div key={ex} className="flex items-start gap-2 text-sm text-gray-50">
                    <span className="text-accent shrink-0 mt-0.5">→</span>
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RetainerSection() {
  return (
    <section className="py-24 px-6 bg-gray-90 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-xs text-accent mb-6">
              For businesses ready to go all-in
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Unlimited Automations Retainer
            </h2>
            <p className="text-gray-30 leading-relaxed mb-6">
              For businesses that want AI running at full capacity. No per-automation pricing. No limits. You get a dedicated automation team that builds, monitors, and improves your AI systems every single month.
            </p>
            <p className="text-gray-30 leading-relaxed mb-8">
              Ideal for companies with 10+ ongoing automation needs, teams that want AI embedded across their entire operation, or businesses ready to build a genuine competitive advantage with AI.
            </p>
            <ul className="space-y-4">
              {RETAINER_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-20">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col">
            <div className="mb-6">
              <div className="text-4xl font-bold text-white mb-1">Contact for Pricing</div>
              <div className="text-sm text-gray-30">Custom monthly retainer · cancel anytime</div>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              {RETAINER_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-20">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={CALCOM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-accent text-white font-semibold py-3 rounded-full text-center hover:bg-accent-bright transition-colors mb-3"
            >
              Book Initial Call →
            </a>
            <a
              href={STRIPE_RETAINER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border border-white/20 text-white font-medium py-3 rounded-full text-center hover:bg-white/10 transition-colors"
            >
              Pay via Stripe →
            </a>
            <p className="text-xs text-gray-50 text-center mt-4">
              Initial call required before retainer onboarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-50 mb-4">Pricing</p>
        <h2 className="text-4xl font-bold text-gray-90 mb-16">Pick your automation level</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="p-8 rounded-2xl border border-gray-20 flex flex-col">
            <div className="text-xs uppercase tracking-widest text-gray-30 mb-4">Starter</div>
            <div className="text-4xl font-bold text-gray-90 mb-1">Contact for Pricing</div>
            <div className="text-sm text-gray-50 mb-8">per automation</div>
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "1 custom AI automation",
                "Built to your specific workflow",
                "Connects to your existing tools",
                "Testing & QA before launch",
                "30-day support after delivery",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-70">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={CALCOM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gray-90 text-white font-semibold py-3 rounded-full text-center hover:bg-gray-80 transition-colors"
            >
              Book Audit Call →
            </a>
          </div>

          {/* Tier 2 */}
          <div className="p-8 rounded-2xl border-2 border-accent bg-gray-10 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs px-3 py-1 rounded-full">Most Popular</div>
            <div className="text-xs uppercase tracking-widest text-gray-30 mb-4">Growth</div>
            <div className="text-4xl font-bold text-gray-90 mb-1">Contact for Pricing</div>
            <div className="text-sm text-gray-50 mb-8">4 automations bundled</div>
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "4 custom AI automations",
                "Built to your specific workflows",
                "Cross-tool integration & logic",
                "Priority support & tuning",
                "60-day support after delivery",
                "Billed as a single project",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-70">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={CALCOM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-accent text-white font-semibold py-3 rounded-full text-center hover:bg-accent-bright transition-colors"
            >
              Book Audit Call →
            </a>
          </div>

          {/* Tier 3 */}
          <div className="p-8 rounded-2xl border border-gray-20 flex flex-col bg-gray-90 text-white">
            <div className="text-xs uppercase tracking-widest text-gray-30 mb-4">Unlimited</div>
            <div className="text-4xl font-bold text-white mb-1">Contact for Pricing</div>
            <div className="text-sm text-gray-30 mb-8">custom monthly retainer · cancel anytime</div>
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Unlimited automations",
                "Dedicated AI agent worker",
                "Priority build queue",
                "Monthly strategy call",
                "Direct Slack/email access",
                "Ongoing monitoring & tuning",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-20">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={CALCOM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-accent text-white font-semibold py-3 rounded-full text-center hover:bg-accent-bright transition-colors"
            >
              Book Initial Call →
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-50 text-center mt-8">
          All automation projects include a free audit call to identify the highest-impact opportunities first.
        </p>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-6 bg-accent text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold leading-tight mb-6">
          Not sure which automation tier is right for you?
        </h2>
        <p className="text-white/80 leading-relaxed mb-10">
          Book a free 20-minute call. We&apos;ll listen to your workflow and recommend the right starting point — whether that&apos;s one automation or the full retainer.
        </p>
        <a
          href={CALCOM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-accent font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors text-lg"
        >
          Book Free Discovery Call →
        </a>
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
          <a href="mailto:info@hyperintelligent.dev" className="hover:text-gray-90 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function AIAutomationServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ExampleAutomations />
      <RetainerSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
