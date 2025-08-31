import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [codeLine, setCodeLine] = useState("");

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  // Fake "running code" animation
  useEffect(() => {
    const lines = [
      `const Vision = "Innovation";`,
      `const Reality = "Growth";`,
      `function Build(startup) { return 🚀 }`,
      `<DigitalFuture />`,
    ];
    let i = 0;
    const interval = setInterval(() => {
      setCodeLine(lines[i]);
      i = (i + 1) % lines.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md border-b border-yellow-200 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Brand */}
        <Link
          to="/"
          className="relative text-4xl md:text-5xl font-extrabold tracking-wide flex items-center gap-1 group"
        >
          <span className="text-gray-900 drop-shadow-sm animate-pulse">Vision</span>
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
            Reality
          </span>

          {/* subtle neon glow */}
          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 blur-md opacity-70 group-hover:opacity-100 transition"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 font-semibold text-gray-800 text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative transition pb-1 hover:text-yellow-600 ${
                  isActive ? "text-yellow-600" : ""
                } after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:rounded-full after:bg-yellow-500 after:transition-all after:duration-500 ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden w-11 h-11 flex flex-col items-center justify-center rounded-xl border border-yellow-400 bg-white shadow"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-yellow-600 mb-1 rounded" />
          <span className="w-6 h-0.5 bg-yellow-600 mb-1 rounded" />
          <span className="w-6 h-0.5 bg-yellow-600 rounded" />
        </button>
      </div>

      {/* Code Runner Strip */}
      <div className="w-full bg-black text-green-400 text-sm font-mono px-6 py-1 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span>{codeLine}</span>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden absolute inset-x-4 top-24 bg-white/95 shadow-2xl rounded-2xl border border-yellow-200 p-6 flex flex-col gap-5 font-semibold text-gray-800 text-lg animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `transition hover:text-yellow-600 ${
                  isActive ? "text-yellow-600" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

