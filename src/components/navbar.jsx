import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        <a href="#home" className="font-display text-xl font-bold tracking-tight text-white">
          Poorna<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">.dev</span>
        </a>

        <ul className="hidden md:flex gap-8 font-medium text-sm text-slate-300">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative hover:text-white transition-colors group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40 hover:scale-105 transition-all"
        >
          Let's Talk
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-b border-white/10" : "max-h-0"
        } bg-ink/95 backdrop-blur-xl`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white"
          >
            Let's Talk
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
