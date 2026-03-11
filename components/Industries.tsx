"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const industries = [
  { name: "Oil and Gas", desc: "Lease tracking, skip tracing, field automation" },
  { name: "RV Parks", desc: "Guest management, metering, occupancy" },
  { name: "Roofing", desc: "Lead response, scheduling, voice-to-invoice" },
  { name: "Real Estate", desc: "Tenant comms, maintenance routing" },
  { name: "Professional Services", desc: "Client intake, document prep, billing" },
];

export default function Industries() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-paper py-32 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="fade-up text-rust text-xs font-medium tracking-[0.15em] uppercase mb-4">
          Industries
        </p>
        <h2 className="fade-up font-[family-name:var(--font-serif)] text-ink text-[clamp(2rem,4vw,3.25rem)] mb-16">
          Built for businesses that work with their hands.
        </h2>

        <div className="flex flex-wrap gap-4 stagger">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="fade-up bg-white border border-clay rounded-xl px-6 py-4 hover:-translate-y-0.5 transition-transform duration-300"
            >
              <span className="text-ink font-bold text-sm">{ind.name}</span>
              <span className="text-slate text-sm ml-2">{ind.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
