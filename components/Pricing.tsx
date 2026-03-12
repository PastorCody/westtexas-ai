"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { BOOKING_URL } from "@/lib/constants";

export default function Pricing() {
  const ref = useScrollReveal();

  return (
    <section id="pricing" ref={ref} className="bg-paper py-32 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="fade-up text-rust text-xs font-medium tracking-[0.15em] uppercase mb-4">
          Pricing
        </p>
        <h2 className="fade-up font-[family-name:var(--font-serif)] text-ink text-[clamp(2rem,4vw,3.25rem)] mb-16">
          Simple pricing. No surprises.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-[800px]">
          {/* The Build */}
          <div className="fade-up bg-white rounded-2xl border border-clay p-8 md:p-10">
            <p className="text-fog text-xs uppercase tracking-[0.15em] font-medium mb-3">
              The Build
            </p>
            <p className="font-[family-name:var(--font-serif)] text-ink text-[clamp(1.75rem,3vw,2.5rem)] mb-6">
              $2,500 - $5,000
            </p>
            <p className="text-fog text-xs uppercase tracking-wider mb-4">
              One-time
            </p>
            <ul className="space-y-3 text-slate text-[15px] mb-8">
              <li>Workflow audit and scoping</li>
              <li>System design</li>
              <li>Build and deployment</li>
              <li>Team training</li>
              <li>Price depends on complexity</li>
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border-2 border-rust text-rust font-medium text-sm px-6 py-3 rounded-lg hover:bg-rust hover:text-white transition-colors"
            >
              Book a Call to Scope It
            </a>
          </div>

          {/* The Retainer */}
          <div className="fade-up bg-white rounded-2xl border border-clay p-8 md:p-10">
            <p className="text-fog text-xs uppercase tracking-[0.15em] font-medium mb-3">
              The Retainer
            </p>
            <p className="font-[family-name:var(--font-serif)] text-ink text-[clamp(1.75rem,3vw,2.5rem)] mb-6">
              $500 - $2,000
            </p>
            <p className="text-fog text-xs uppercase tracking-wider mb-4">
              Per month
            </p>
            <ul className="space-y-3 text-slate text-[15px] mb-8">
              <li>System maintenance and monitoring</li>
              <li>Performance optimization</li>
              <li>New automation builds each month</li>
              <li>Direct access to us, not a ticket queue</li>
              <li>Cancel anytime, 30 days notice</li>
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-rust text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-rust/90 transition-colors"
            >
              Book a Call to Start
            </a>
          </div>
        </div>

        <p className="fade-up text-slate text-sm text-center max-w-[500px] mx-auto mt-12">
          A full-time admin costs $35,000 to $45,000 per year. This runs 24/7
          for a fraction of that.
        </p>
      </div>
    </section>
  );
}
