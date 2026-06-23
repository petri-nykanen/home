import { type WheelEvent, useEffect, useRef } from "react";
import LandingContent from "@/components/site-content/landing-content";
import SkillsContent from "@/components/site-content/skills-content";
import AboutMeContent from "@/components/site-content/about-me-content";
import SocialsRow from "@/components/SocialsRow";
import mainbg from "@/assets/images/mainbg2.a5b1a9d8a78c28f7974c.png";
import deskpic from "@/assets/images/deskpic1.png";

interface Props {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const LandingPage = ({ activeSection, setActiveSection }: Props) => {
  const homeRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);

  const wheelTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(
    null,
  );
  const isWheelScrollingRef = useRef(false);
  const sectionOrder = ["home", "skills", "about"];

  useEffect(() => {
    const sections = [
      homeRef.current,
      skillsRef.current,
      aboutRef.current,
    ].filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target instanceof HTMLElement) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: [0.35, 0.65],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    isWheelScrollingRef.current = true;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    if (wheelTimeoutRef.current) {
      window.clearTimeout(wheelTimeoutRef.current);
    }
    wheelTimeoutRef.current = window.setTimeout(() => {
      isWheelScrollingRef.current = false;
    }, 1000);
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (isWheelScrollingRef.current) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    const direction = event.deltaY > 0 ? 1 : -1;
    const currentIndex = sectionOrder.indexOf(activeSection);
    const nextIndex = currentIndex + direction;

    if (nextIndex < 0 || nextIndex >= sectionOrder.length) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    scrollToSection(sectionOrder[nextIndex]);
  };

  return (
    <div onWheel={handleWheel} className="scroll-smooth space-y-24">
      <section
        id="home"
        ref={homeRef}
        className="relative scroll-mt-24 min-h-screen py-16"
        style={{
          backgroundImage: `url(${mainbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/30 pointer-events-none" />
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <LandingContent />
          <div className="mt-10">
            <SocialsRow />
          </div>
        </div>
      </section>

      <section
        id="skills"
        ref={skillsRef}
        className="scroll-mt-24 min-h-screen py-16 text-black"
      >
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technologies I use
          </h2>
          <SkillsContent />
        </div>
      </section>

      <section
        id="about"
        ref={aboutRef}
        className="scroll-mt-24 min-h-screen py-16 text-black"
        style={{
          backgroundImage: `url(${deskpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="rounded-md border-6 border-indigo-400 shadow-md shadow-black/20 p-6 bg-transparent">
            <AboutMeContent />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
