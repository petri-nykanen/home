import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function App() {
	return (
		<>
			<main className="max-w-screen-md mx-auto px-4">
				<HeroSection />
				<AboutSection />
				<ContactSection />
				<Navbar />
			</main>
		</>
	);
}
