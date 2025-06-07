import React from "react";

export default function HeroSection() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center bg-blue-100 pt-20"
		>
			<div className="max-w-screen-lg mx-auto px-4 text-center">
				<h1 className="text-4xl font-bold">Welcome to My Website</h1>
				<p className="mt-4 text-lg text-gray-700">
					This is the hero section with a standard width layout.
				</p>
			</div>
		</section>
	);
}
