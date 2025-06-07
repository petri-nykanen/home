export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-amber-500 shadow z-50">
      <div className="max-w-screen-lg mx-auto px-4 py-4 flex justify-center gap-8">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
