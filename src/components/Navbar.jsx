import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "01 about", href: "#about" },
    { label: "02 skills", href: "#skills" },
    { label: "03 projects", href: "#projects" },
    { label: "04 contact", href: "#contact" },
  ];

  const borderColor = darkMode ? "border-[#21262d]" : "border-[#d0d7de]";
  const bg = darkMode
    ? scrolled ? "bg-[#0d1117]/90 backdrop-blur-sm" : "bg-transparent"
    : scrolled ? "bg-[#f0f4f8]/90 backdrop-blur-sm" : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? borderColor : "border-transparent"} ${bg}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-sm font-bold flex items-center gap-2">
          <span className="text-[#39d0b8]">●</span>
          <span className={darkMode ? "text-white" : "text-[#0d1117]"}>~/shehab</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-mono text-xs transition-colors hover:text-[#39d0b8] ${darkMode ? "text-[#8b949e]" : "text-[#57606a]"}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            className={`hidden md:flex items-center gap-2 font-mono text-xs px-4 py-2 rounded border transition-all hover:border-[#39d0b8] hover:text-[#39d0b8] ${
              darkMode ? "border-[#30363d] text-[#8b949e]" : "border-[#d0d7de] text-[#57606a]"
            }`}
          >
            ↓ Résumé
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded border transition-all hover:border-[#39d0b8] ${darkMode ? "border-[#30363d] text-[#8b949e]" : "border-[#d0d7de] text-[#57606a]"}`}
          >
            {darkMode ? <FiSun size={14} /> : <FiMoon size={14} />}
          </button>
          <button
            className={`md:hidden p-2 rounded border ${darkMode ? "border-[#30363d] text-[#8b949e]" : "border-[#d0d7de] text-[#57606a]"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={14} /> : <FiMenu size={14} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 ${darkMode ? "border-[#21262d] bg-[#0d1117]" : "border-[#d0d7de] bg-[#f0f4f8]"}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`font-mono text-xs hover:text-[#39d0b8] ${darkMode ? "text-[#8b949e]" : "text-[#57606a]"}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;