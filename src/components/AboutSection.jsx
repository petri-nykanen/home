// import React from "react";

// export default function AboutSection() {
// 	return (
// 		<section
// 			id="about"
// 			className="min-h-screen flex items-center justify-center bg-green-100 border-2 border-solid rounded-2xl m-2"
// 		>
// 			<div className="text-center">
// 				<h2 className="text-3xl font-semibold">About Me</h2>
// 				<p className="mt-4 text-lg text-gray-700">
// 					I'm a creative professional who enjoys building smooth, responsive web
// 					experiences.
// 				</p>
// 			</div>
// 		</section>
// 	);
// }
import React from "react";
import useInView from "../hooks/useInView";

export default function AboutSection() {
	const [ref, isVisible] = useInView({ threshold: 0.1 });

	return (
		<section
			id="about"
			ref={ref}
			className={`
        min-h-screen bg-green-100 rounded-xl p-8 max-w-screen-lg mx-auto
        transition-opacity duration-700 transform 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
		>
			<h2 className="bg-green-500 text-white px-6 py-2 rounded-t-xl inline-block font-semibold">
				About Me
			</h2>
			<p className="mt-4 text-center text-gray-700 max-w-xl">
				I'm a creative professional who enjoys building smooth, responsive web
				experiences.
			</p>
		</section>
	);
}
