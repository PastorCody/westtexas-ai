import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Examples from "@/components/Examples";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Industries from "@/components/Industries";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Examples />
      <Process />
      <Pricing />
      <Industries />
      <About />
      <ContactCTA />
      <Footer />
    </>
  );
}
