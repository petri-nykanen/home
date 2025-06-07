import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function App() {
	return (
		<div className="max-w-screen-md mx-auto px-4">
			<Navbar />
			<main>
				<HeroSection />
				<AboutSection />
				<ContactSection />
			</main>
		</div>
	);
}
