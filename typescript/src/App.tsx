import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SkillsPage from "./pages/SkillsPage";
import AboutMePage from "./pages/AboutMePage";
import Navigation from "./components/Navigation";
import { motion } from "motion/react";
import Header from "./components/Header";

function App() {
  const paths = ["", "skills"];
  return (
    <>
      <Navigation pathName={paths} />
      <motion.div className=" min-w-fit p-10 min-h-screen flex-col">
        <Header />
        <div className="w-1/2 m-auto">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<AboutMePage />} />
          </Routes>
        </div>
      </motion.div>
    </>
  );
}

export default App;
