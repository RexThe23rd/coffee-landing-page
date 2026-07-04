import React from 'react'
const destinations = [
  {
    title: "Finca la Zulia",
    image: "salento",
    description: "Explore colorful streets and authentic coffee culture."
  },
  {
    title: "Cocora Valley",
    image: "cocora",
    description: "Walk among the world's tallest wax palms."
  },
  {
    title: "Coffee Farm",
    image: "farm",
    description: "Experience the journey from bean to cup."
  }
];

function Destinations() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {destinations.map((destination) => (
        <div
          key={destination.title}
          className="card bg-base-100 shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
        >
          <figure className="h-60">
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {destination.title}
            </h2>

            <p>{destination.description}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Destinations