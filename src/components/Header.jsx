import React from 'react'
import { Coffee, Menu } from "lucide-react";
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar fixed top-0 z-50 w-full px-8 py-4 transition-all duration-300 ${scrolled ? "bg-base-100/80 backdrop-blur-md shadow-md text-base-content" : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <div className="flex-1">
        <a href="#hero" className="flex items-center gap-2 text-lg font-bold">
          <Coffee className="size-7" />
          <div className="hidden md:block">
            <h1 className="font-bold">Latin Biosoto</h1>
            <p className="text-xs opacity-70">
              Latin America Biodiverse Social Tour Operator
            </p>
          </div>
        </a>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8">
        <a href="#about" className="hover:text-primary transition">
          About
        </a>

        <a href="#destinations" className="hover:text-primary transition">
          Destinations
        </a>

        <a href="#testimonials" className="hover:text-primary transition">
          Testimonials
        </a>

        <a href="#contact" className="hover:text-primary transition">
          Contact
        </a>
      </nav>

      {/* CTA */}
      <div className="hidden md:flex flex-1 justify-end">
        <a
          href="#contact"
          className={`btn rounded-full ${scrolled ? "btn-neutral" : "btn-outline text-white border-white hover:bg-white hover:text-black"
            }`}
        >
          Book a Tour
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="btn btn-ghost btn-circle">
          <Menu />
        </button>
      </div>
    </header>
  );
}

export default Header