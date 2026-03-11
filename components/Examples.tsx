"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const examples = [
  {
    industry: "Roofing Company",
    subtitle: "Lead response in under 60 seconds",
    before:
      "Lead sits in an inbox until Monday. Homeowner already called two other roofers.",
    after:
      "System detects the lead, sends a personalized response instantly, books the follow-up, logs everything. No human touched it.",
  },
  {
    industry: "Oil and Gas Land Company",
    subtitle: "40 mineral owners researched before lunch",
    before:
      "Three days of courthouse records, spreadsheets, dead-end phone numbers.",
    after:
      "System runs skip tracing, pulls records, organizes by priority, flags who is ready to call.",
  },
  {
    industry: "RV Park",
    subtitle: "Revenue they were leaving on the table",
    before:
      "Flat-rate pricing, no metering data, a notebook at the front desk.",
    after:
      "Real-time occupancy, automated guest comms, usage-based billing that captures every dollar.",
  },
];

export default function Examples() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-paper py-32 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="fade-up text-rust text-xs font-medium tracking-[0.15em] uppercase mb-4">
          Real Examples
        </p>
        <h2 className="fade-up font-[family-name:var(--font-serif)] text-ink text-[clamp(2rem,4vw,3.25rem)] max-w-[700px] mb-16">
          What AI infrastructure looks like inside a real business.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 stagger">
          {examples.map((ex) => (
            <div
              key={ex.industry}
              className="fade-up bg-white rounded-2xl p-8 md:p-10 border border-clay hover:border-rust/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-[family-name:var(--font-sans)] text-ink font-bold text-lg mb-1">
                {ex.industry}
              </h3>
              <p className="text-rust text-sm font-medium mb-6">
                {ex.subtitle}
              </p>
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <span className="text-fog text-xs uppercase tracking-wider block mb-1">
                    Before
                  </span>
                  <p className="text-slate">{ex.before}</p>
                </div>
                <div>
                  <span className="text-rust text-xs uppercase tracking-wider block mb-1">
                    After
                  </span>
                  <p className="text-ink font-medium">{ex.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
