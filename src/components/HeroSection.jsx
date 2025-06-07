import React from "react";
import useInView from "../hooks/useInView";

export default function HeroSection() {
	const [ref, isVisible] = useInView({ threshold: 0.1 });

	return (
		<section
			id="home"
			ref={ref}
			className={`
        min-h-screen bg-blue-100 rounded-xl p-8 max-w-screen-lg mx-auto pt-20
        transition-opacity duration-700 transform 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
		>
			<h1 className="bg-blue-500 text-white px-6 py-2 rounded-t-xl inline-block font-bold text-4xl">
				Welcome
			</h1>
			<p className="mt-6 text-lg text-gray-700 text-center max-w-xl mx-auto">
				This is the hero section with a smooth scroll and curved header.
			</p>
		</section>
	);
}
