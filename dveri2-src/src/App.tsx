import { useState } from "react";
import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import { Header } from "./components/Header";
import { MobileMenu } from "./components/MobileMenu";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { Collections } from "./components/Collections";
import { Calculator } from "./components/Calculator";
import { Materials } from "./components/Materials";
import { Process } from "./components/Process";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { CTAFooter } from "./components/CTAFooter";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <div className="min-h-screen bg-canvas pb-[4.75rem] lg:pb-0">
          <Header onMenuOpen={() => setMenuOpen(true)} />
          <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

          <main>
            <Hero index={heroIndex} onNavigate={setHeroIndex} />
            <TrustStrip />
            <Collections />
            <Calculator />
            <Materials />
            <Process />
            <Gallery />
            <Testimonials />
            <FAQ />
          </main>

          <CTAFooter />
          <FloatingActions />
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}
