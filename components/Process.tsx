"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const buildSteps = [
  { num: "01", title: "We talk.", desc: "Book a 30-minute call. Tell me what is eating your team's time. No prep needed." },
  { num: "02", title: "I scope it.", desc: "Within 48 hours you get a plain-language proposal. What I build, what it connects to, what it costs, how long it takes." },
  { num: "03", title: "You pay the setup fee.", desc: "Covers the full build: workflow audit, system design, development, deployment, and training." },
  { num: "04", title: "I build and ship.", desc: "1 to 3 weeks depending on complexity. A working system connected to your actual tools." },
];

const retainerSteps = [
  { num: "05", title: "Monthly retainer starts.", desc: "I stay on. I monitor the system. I fix what breaks. I improve what is working." },
  { num: "06", title: "Your business gets more automated every month.", desc: "This is not maintenance-only. It is ongoing development. Each month I build the next thing." },
];

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="fade-up flex gap-5 mb-10">
      <span className="font-[family-name:var(--font-serif)] text-clay text-3xl md:text-4xl shrink-0 w-12">
        {num}
      </span>
      <div>
        <h3 className="font-[family-name:var(--font-sans)] text-ink font-bold text-base mb-1">
          {title}
        </h3>
        <p className="text-slate text-[15px] leading-relaxed max-w-[400px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" ref={ref} className="bg-paper py-32 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="fade-up text-rust text-xs font-medium tracking-[0.15em] uppercase mb-4">
          How It Works
        </p>
        <h2 className="fade-up font-[family-name:var(--font-serif)] text-ink text-[clamp(2rem,4vw,3.25rem)] mb-16">
          Two phases. No committees.
        </h2>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Phase 1 */}
          <div>
            <p className="fade-up text-fog text-xs uppercase tracking-[0.15em] font-medium mb-8">
              Phase 1: The Build
            </p>
            {buildSteps.map((s) => (
              <Step key={s.num} {...s} />
            ))}
          </div>

          {/* Phase 2 */}
          <div>
            <p className="fade-up text-fog text-xs uppercase tracking-[0.15em] font-medium mb-8">
              Phase 2: The Retainer
            </p>
            {retainerSteps.map((s) => (
              <Step key={s.num} {...s} />
            ))}
          </div>
        </div>

        <p className="fade-up text-slate text-sm mt-12">
          Cancel anytime with 30 days notice.
        </p>
      </div>
    </section>
  );
}
