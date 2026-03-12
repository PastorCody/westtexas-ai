"use client";

import { BOOKING_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 pt-24 pb-32 w-full text-center">
        {/* Tag */}
        <p className="hero-anim hero-anim-1 text-rust text-xs font-medium tracking-[0.15em] uppercase mb-6">
          AI Infrastructure for Small Business
        </p>

        {/* Headline */}
        <h1 className="hero-anim hero-anim-2 font-[family-name:var(--font-serif)] text-ink text-[clamp(3rem,7vw,5.5rem)] leading-[1.08] max-w-[800px] mx-auto mb-8">
          We build AI systems that run{" "}
          <em className="italic">inside</em> your business.
        </h1>

        {/* Subheadline */}
        <p className="hero-anim hero-anim-3 text-slate text-lg md:text-xl max-w-[580px] mx-auto mb-10 leading-relaxed">
          You tell us what your team wastes the most time on. We build the
          automation that eliminates it. Then we stay on retainer to maintain it
          and build more.
        </p>

        {/* CTA */}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-anim hero-anim-4 inline-block bg-ink text-white font-medium text-base px-8 py-4 rounded-full hover:bg-ink/85 transition-colors"
        >
          Book a Free Call
        </a>

        {/* Proof strip */}
        <div className="hero-anim hero-anim-5 mt-20 flex flex-wrap justify-center gap-x-8 gap-y-3 text-fog text-xs uppercase tracking-[0.1em]">
          <span>Oil and gas, RV parks, roofing</span>
          <span className="hidden sm:inline text-fog/30">|</span>
          <span>Setup fee + monthly retainer</span>
          <span className="hidden sm:inline text-fog/30">|</span>
          <span>Shipping in days, not months</span>
        </div>
      </div>
    </section>
  );
}
