import React from "react";

export default function AboutSection() {
	return (
		<section
			id="about"
			className="min-h-screen flex items-center justify-center bg-green-100 border-2 border-solid rounded-2xl m-2"
		>
			<div className="text-center">
				<h2 className="text-3xl font-semibold">About Me</h2>
				<p className="mt-4 text-lg text-gray-700">
					I'm a creative professional who enjoys building smooth, responsive web
					experiences.
				</p>
			</div>
		</section>
	);
}
