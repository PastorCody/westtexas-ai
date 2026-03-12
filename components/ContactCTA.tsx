"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { BOOKING_URL } from "@/lib/constants";

export default function ContactCTA() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-paper py-32 md:py-40">
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <h2 className="fade-up font-[family-name:var(--font-serif)] text-ink text-[clamp(2rem,4.5vw,3.5rem)] mb-10 leading-tight">
          Tell us what is broken. We will tell you if we can fix it.
        </h2>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fade-up inline-block bg-ink text-white font-medium text-lg px-10 py-5 rounded-full hover:bg-ink/85 transition-colors"
        >
          Book a Free 30-Minute Call
        </a>

        <p className="fade-up text-fog text-sm mt-6">
          No pitch deck. No discovery phase. No commitment.
        </p>
      </div>
    </section>
  );
}
