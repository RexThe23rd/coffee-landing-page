import React from 'react'
import { ArrowRight } from "lucide-react";
import hroimg from '../assets/hero-img.jpg'

function Hero() {
  return (
    <section
      id="hero"
      className="hero min-h-screen"
    >
      <img src={hroimg} alt="Coffee Plantation" className="w-full object-cover" />
      {/* Dark overlay */}
      <div className="hero-overlay bg-gradient-to-b from-black/70 to-black/40"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-sm mb-4">
            Coffee Tours • Nature • Adventure
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Discover Colombia's Coffee Region
          </h1>

          <p className="py-8 text-lg md:text-xl max-w-2xl mx-auto">
            Home to some of the world's smoothest coffee. Discover authentic
            experiences that celebrate local culture, embrace accessibility and
            inclusion, and help preserve the region and its communities.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="#contact" className="btn btn-neutral btn-lg">
              Book a Tour
              <ArrowRight className="size-5" />
            </a>

            <a href="#about" className="btn btn-outline btn-lg text-white">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero