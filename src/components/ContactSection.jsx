import React from "react";

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="min-h-screen flex items-center justify-center bg-yellow-100 border-2 border-solid rounded-2xl m-2"
		>
			<div className="text-center">
				<h2 className="text-3xl font-semibold">Contact</h2>
				<p className="mt-4 text-lg text-gray-700">
					Feel free to reach out via email or social media!
				</p>
			</div>
		</section>
	);
}
