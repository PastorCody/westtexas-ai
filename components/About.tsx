"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-paper py-32 md:py-40">
      <div className="mx-auto max-w-[640px] px-6 text-center">
        <p className="fade-up text-rust text-xs font-medium tracking-[0.15em] uppercase mb-8">
          Who We Are
        </p>

        <blockquote className="fade-up font-[family-name:var(--font-serif)] italic text-ink text-[clamp(1.75rem,4vw,2.75rem)] mb-10 leading-tight">
          &ldquo;We build the thing that fixes it.&rdquo;
        </blockquote>

        <p className="fade-up text-slate text-base leading-relaxed">
          WestTexas.ai is led by Cody McMurray. We build AI infrastructure for
          small businesses that are tired of doing admin work by hand. We work
          with oil and gas companies, RV parks, roofers, and anyone else whose
          team is buried in busywork. No big agency. No long timelines. Just a
          small team that builds fast, ships working systems, and stays on to
          keep building.
        </p>
      </div>
    </section>
  );
}
