import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Experiments } from "@/components/experiments";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { SelectedWork } from "@/components/selected-work";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Capabilities />
        <SelectedWork />
        <About />
        <Skills />
        <Experiments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
