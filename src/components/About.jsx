import React from 'react'
import abt from '../assets/abt-img.jpg'
import {
  Coffee,
  MapPinned,
  Mountain,
  Users
} from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Authentic Coffee",
    description: "Taste freshly brewed coffee straight from local farms."
  },
  {
    icon: Mountain,
    title: "Scenic Landscapes",
    description: "Discover breathtaking mountain views and coffee plantations."
  },
  {
    icon: MapPinned,
    title: "Local Expertise",
    description: "Explore hidden gems with an experienced local guide."
  },
  {
    icon: Users,
    title: "Personalized Tours",
    description: "Enjoy small groups and customized experiences."
  }
];

function About() {
  return (
    <section id="about" className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div>
          <img src={abt} alt="About Us Image" className="rounded-2xl shadow-xl object-cover h-[600px] w-full hover:scale-[1.02] transition duration-500" />
        </div>

        {/* Text */}
        <div>
          <p className="text-primary font-semibold uppercase tracking-widest">
            About Us
          </p>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            Discover Coffee Like Never Before
          </h2>

          <p className="mt-6 text-lg opacity-80">
            We offer authentic guided experiences through Colombia's
            coffee region, connecting visitors with local culture,
            breathtaking scenery, and the people behind every cup.
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="card bg-base-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="card-body">

                    <div className="w-12 h-12 rounded-full bg-[#6F4E37] text-white flex items-center justify-center">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="text-xl font-semibold">
                      {feature.title}
                    </h3>

                    <p className="opacity-70">
                      {feature.description}
                    </p>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Button */}

          <div className="mt-8">
            <a href="#destinations" className="btn btn-neutral rounded-full">
              Explore Destinations
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
export default About