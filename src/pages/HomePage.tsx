import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Reveal } from "@/components/Reveal";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <Reveal><Proof /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><CaseStudies /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
    </div>
  );
}
