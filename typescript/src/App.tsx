import "./index.css";
import { useCallback, useState } from "react";
import LandingPage from "./pages/LandingPage";
import Navigation from "./components/Navigation";
import { motion } from "motion/react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import ThemeProvider from "./ThemeProvider";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementTop, behavior: "smooth" });
  }, []);

  return (
    <ThemeProvider>
      <MantineProvider>
        <Navigation
          sections={sections}
          activeSection={activeSection}
          onSelect={handleScrollToSection}
        />
        <motion.div className="min-h-screen min-w-screen">
          <LandingPage
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </motion.div>
      </MantineProvider>
    </ThemeProvider>
  );
}

export default App;
