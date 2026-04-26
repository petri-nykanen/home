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
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <ThemeProvider>
      <MantineProvider>
        <Navigation
          sections={sections}
          activeSection={activeSection}
          onSelect={handleScrollToSection}
        />
        <motion.div className="min-h-screen min-w-screen py-10">
          <div className="w-full max-w-5xl mx-auto space-y-24">
            <LandingPage
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
        </motion.div>
      </MantineProvider>
    </ThemeProvider>
  );
}

export default App;
