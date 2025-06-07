import { Home, User, Mail } from "lucide-react";

export default function SidebarNav() {
	const navItems = [
		{ id: "home", label: "Home", icon: <Home size={20} /> },
		{ id: "about", label: "About", icon: <User size={20} /> },
		{ id: "contact", label: "Contact", icon: <Mail size={20} /> },
	];

	return (
		<nav
			className="fixed top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 px-3 py-2"
			style={{ left: "calc((100vw - 768px) / 2 - 30px)" }}
		>
			{navItems.map(({ id, label, icon }) => (
				<a
					key={id}
					href={`#${id}`}
					className="group relative flex items-center justify-center text-gray-600 hover:text-blue-600"
				>
					{icon}
					<span className="absolute left-full ml-2 w-max opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-gray-800 text-white px-2 py-1 rounded-md shadow">
						{label}
					</span>
				</a>
			))}
		</nav>
	);
}
