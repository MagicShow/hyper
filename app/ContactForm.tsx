"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xreryjzz");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 rounded-2xl bg-white/5 border border-white/10">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-2xl font-bold mb-3">Message sent!</h3>
        <p className="text-gray-30 text-sm leading-relaxed max-w-xs">
          We&apos;ll be in touch within 24 hours. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-30 mb-2">
          Business Name
        </label>
        <input
          type="text"
          name="business_name"
          placeholder="Your business"
          className="w-full bg-gray-80 border border-gray-70 rounded-xl px-4 py-3 text-white placeholder-gray-50 text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-30 mb-2">
          Phone or Email
        </label>
        <input
          type="text"
          name="contact"
          placeholder="How do we reach you?"
          required
          className="w-full bg-gray-80 border border-gray-70 rounded-xl px-4 py-3 text-white placeholder-gray-50 text-sm focus:outline-none focus:border-accent transition-colors"
        />
        <ValidationError prefix="Contact" field="contact" errors={state.errors} />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-30 mb-2">
          What do you need help with?
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us briefly what you're dealing with — calls, leads, website, all of the above..."
          required
          className="w-full bg-gray-80 border border-gray-70 rounded-xl px-4 py-3 text-white placeholder-gray-50 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-accent text-white font-medium py-3 rounded-full hover:bg-accent-bright transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Sending..." : "Get a Free Consultation"}
      </button>
      <ValidationError errors={state.errors} />
      <p className="text-xs text-gray-30 text-center">
        No sales pitch. Just a straight conversation about whether we can help.
      </p>
    </form>
  );
}