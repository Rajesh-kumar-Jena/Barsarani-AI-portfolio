import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Cloud, MoonStar, Smartphone, Sparkles, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="showcase">
      <div className="showcase-layout">
        <div className="portfolio-frame">
          <SiteHeader />
          <Hero />
          <Skills />
          <Projects />
          <div className="lower-grid">
            <Education />
            <Contact />
          </div>
          <Footer />
        </div>
      </div>

      <div className="feature-strip">
        <div><Sparkles /><span>Stunning Animations<small>with Framer Motion</small></span></div>
        <div><Smartphone /><span>Fully Responsive<small>(Desktop + Mobile)</small></span></div>
        <div><MoonStar /><span>Dark / Light Mode<small>Support</small></span></div>
        <div><Zap /><span>Optimized Performance<small>&amp; SEO Ready</small></span></div>
        <div><Cloud /><span>Deploy on Vercel<small>with One Click</small></span></div>
      </div>
    </main>
  );
}
