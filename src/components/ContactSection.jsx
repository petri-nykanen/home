// import React from "react";

// export default function ContactSection() {
// 	return (
// 		<section
// 			id="contact"
// 			className="min-h-screen flex items-center justify-center bg-yellow-100 border-2 border-solid rounded-2xl m-2"
// 		>
// 			<div className="text-center">
// 				<h2 className="text-3xl font-semibold">Contact</h2>
// 				<p className="mt-4 text-lg text-gray-700">
// 					Feel free to reach out via email or social media!
// 				</p>
// 			</div>
// 		</section>
// 	);
// }
import React from "react";
import useInView from "../hooks/useInView";

export default function ContactSection() {
	const [ref, isVisible] = useInView({ threshold: 0.1 });

	return (
		<section
			id="contact"
			ref={ref}
			className={`
        min-h-screen bg-yellow-100 rounded-xl p-8 max-w-screen-lg mx-auto
        transition-opacity duration-700 transform 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
		>
			<h2 className="bg-yellow-500 text-white px-6 py-2 rounded-t-xl inline-block font-semibold text-3xl">
				Contact
			</h2>
			<p className="mt-6 text-lg text-gray-700 text-center max-w-xl mx-auto">
				Feel free to reach out via email or social media!
			</p>
		</section>
	);
}
