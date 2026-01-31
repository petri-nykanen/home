import { Route, Routes } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import SkillsPage from "./pages/SkillsPage";
import AboutMePage from "./pages/AboutMePage";
import Navigation from "./components/Navigation";
import { motion } from "motion/react";
import Header from "./components/Header";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import ThemeProvider from "./ThemeProvider";

function App() {
  const paths = ["", "skills"];
  return (
    <ThemeProvider>
      <MantineProvider>
        <Navigation pathName={paths} />
        <motion.div className="p-10 min-h-screen flex-col">
          <Header />
          <div className="w-1/2 m-auto">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<AboutMePage />} />
            </Routes>
          </div>
        </motion.div>
      </MantineProvider>
    </ThemeProvider>
  );
}

export default App;
