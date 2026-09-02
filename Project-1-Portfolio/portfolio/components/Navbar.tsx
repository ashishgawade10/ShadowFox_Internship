"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#070b14]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            onClick={handleLinkClick}
            className="text-2xl font-bold text-white"
          >
            Ashish<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-8">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
            >
              Hire Me
            </a>

          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 transition"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

        {/* Mobile Navigation */}

        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-5">

            <div className="flex flex-col gap-2">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-center font-medium transition"
              >
                Hire Me
              </a>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}