import React from "react";

export default function HeroSection() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center bg-blue-100 pt-20 border-2 border-solid rounded-2xl m-2 mt-20"
		>
			<div className="text-center">
				<h1 className="text-4xl font-bold">Welcome to My Website</h1>
				<p className="mt-4 text-lg text-gray-700">
					This is the hero section with a standard width layout.
				</p>
			</div>
		</section>
	);
}
