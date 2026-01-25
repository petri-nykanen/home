import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SkillsPage from "./pages/SkillsPage";
import SocialsPage from "./pages/SocialsPage";
import AboutMePage from "./pages/AboutMePage";
import Navigation from "./components/Navigation";
import { motion } from "motion/react";

function App() {
  const paths = ["", "skills", "socials", "about"];
  return (
    <>
      <Navigation pathName={paths} />
      <motion.div className="border-8 w-l rounded-4xl border-amber-400 p-10 bg-linear-to-t from-sky-500 to-indigo-500 min-h-screen shadow-2xl shadow-black">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/socials" element={<SocialsPage />} />
          <Route path="/about" element={<AboutMePage />} />
        </Routes>
      </motion.div>
    </>
  );
}

export default App;
