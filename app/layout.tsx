import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "WestTexas.ai - AI Infrastructure for Small Business",
  description:
    "I build AI systems that run inside your business. Setup fee plus monthly retainer. Oil and gas, RV parks, roofing, and more.",
  metadataBase: new URL("https://westtexas.ai"),
  openGraph: {
    title: "WestTexas.ai - AI Infrastructure for Small Business",
    description:
      "I build AI systems that run inside your business. Setup fee plus monthly retainer.",
    url: "https://westtexas.ai",
    siteName: "WestTexas.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(instrumentSerif.variable, "font-sans", geist.variable)}
    >
      <body className="font-[family-name:var(--font-sans)]">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "West Texas AI",
              url: "https://westtexas.ai",
              areaServed: "West Texas",
              priceRange: "$$",
              description:
                "AI infrastructure for small business. Setup fee plus monthly retainer.",
            }),
          }}
        />
      </body>
    </html>
  );
}
