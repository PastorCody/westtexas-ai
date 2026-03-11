"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-clay"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-sans)] font-bold text-lg tracking-tight text-ink"
        >
          WestTexas<span className="text-rust">.ai</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-ink hover:text-rust transition-colors"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-ink hover:text-rust transition-colors"
          >
            Pricing
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-ink/85 transition-colors"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-ink"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-paper border-t border-clay px-6 py-6 space-y-4">
          <a
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="block text-ink font-medium"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="block text-ink font-medium"
          >
            Pricing
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-ink text-white text-center font-medium px-5 py-3 rounded-full"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
