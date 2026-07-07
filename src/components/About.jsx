import React from 'react'
import abt from '../assets/abt-img.jpg'

const sections = [
  {
    title: "Philosophy",
    description:
      "We believe in tourism based on dignified, decent, honest, simple, human and respectful treatment. With zero discrimination.",

    extra:
      "We work with a 100% certified and trained team with over 15 years of experience as professional guides and inbound tourism operators."
  },

  {
    title: "Mission 2031",
    description:
      "By 2031 we aim to establish ourselves as one of the best local tour operators in Colombia.",

    extra:
      "We do this through non-mass tourism, inclusion, accessibility and environmental regeneration.",

    goals: [
      "Train nearly 50 tourism companies worldwide.",
      "Certify more than 30 tourism companies under the Latin Biosoto philosophy."
    ]
  },

  {
    title: "Vision",
    description:
      "To be a local tour operator in Colombia that integrates every actor in the tourism value chain.",

    extra:
      "All well trained, certified and prepared under an inclusive philosophy."
  },

  {
    title: "Key Pillars",

    pillars: [
      "Inclusion & Accessibility",
      "Zero Discrimination & Human Treatment",
      "Non-Mass Tourism",
      "Local Impact",
      "Environmental Regeneration",
      "Training & Certification"
    ]
  }
];

function About() {
  return (
    <section id="about" className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div>
          <img src={abt} alt="About Us Image" className="rounded-2xl shadow-xl object-cover h-150 w-full hover:scale-[1.02] transition duration-500" />
        </div>

        {/* Text */}
        <div>
          <p className="text-primary font-semibold uppercase tracking-widest">
            About Us
          </p>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            About Latin Biosoto
          </h2>

          <p className="mt-6 text-lg opacity-80">
            Latin Biosoto is committed to creating meaningful tourism experiences
            through inclusion, accessibility, environmental responsibility, and
            strong partnerships with local communities across Colombia.
          </p>

          {/* Feature list */}
          <div className="space-y-6 mt-10">
            {sections.map((section) => (
              <div
                key={section.title}
                className="card bg-base-200 shadow-md hover:shadow-xl transition-all"
              >
                <div className="card-body">

                  <h3 className="text-2xl font-bold">
                    {section.title}
                  </h3>

                  {section.description && (
                    <p className="opacity-80">
                      {section.description}
                    </p>
                  )}

                  {section.extra && (
                    <p className="opacity-70">
                      {section.extra}
                    </p>
                  )}

                  {section.goals && (
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      {section.goals.map(goal => (
                        <li key={goal}>{goal}</li>
                      ))}
                    </ul>
                  )}

                  {section.pillars && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {section.pillars.map(pillar => (
                        <span
                          key={pillar}
                          className="badge badge-highlight badge-outline badge-lg"
                        >
                          {pillar}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
export default About