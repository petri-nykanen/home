import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import SkillsPage from "./pages/SkillsPage";
import AboutMePage from "./pages/AboutMePage";
import Navigation from "./components/Navigation";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import ThemeProvider from "./ThemeProvider";

function App() {
  const location = useLocation();
  const paths = ["", "skills"];
  return (
    <ThemeProvider>
      <MantineProvider>
        <Navigation pathName={paths} />
        <motion.div className="p-10 min-h-screen min-w-screen">
          <Header />
          <div className="w-1/2 m-auto">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <LandingPage />
                    </motion.div>
                  }
                />
                <Route
                  path="/skills"
                  element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <SkillsPage />
                    </motion.div>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <AboutMePage />
                    </motion.div>
                  }
                />
              </Routes>
            </AnimatePresence>
          </div>
        </motion.div>
      </MantineProvider>
    </ThemeProvider>
  );
}

export default App;
