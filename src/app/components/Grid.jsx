import React from "react";
import {
  FaHandHoldingUsd,
  FaMapMarkerAlt,
  FaGavel,
  FaUserTie,
} from "react-icons/fa";

export default function Grid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="p-6 border rounded-lg shadow-md text-center bg-white">
          <FaHandHoldingUsd className="text-5xl text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Investor First Approach</h3>
          <p className="text-gray-600 text-lg">
            We prioritize our valued customers by consistently delivering
            exceptional services and ensuring their complete satisfaction at
            every step.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-md text-center bg-white">
          <FaMapMarkerAlt className="text-5xl text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">No-Cost Site Visit</h3>
          <p className="text-gray-600 text-lg">
            Enjoy a complimentary visit to Dholera Smart City with
            pick-and-drop services from Ahmedabad Airport or Railway Station
            for out-of-state visitors.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-md text-center bg-white">
          <FaGavel className="text-5xl text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Legit & Legal</h3>
          <p className="text-gray-600 text-lg">
            All our projects are NA, NOC, title clear, and unit plan passed,
            adhering to high standards. Registered sale deeds ensure a
            seamless and transparent process.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-md text-center bg-white">
          <FaUserTie className="text-5xl text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          <p className="text-gray-600 text-lg">
            With over a decade of proven expertise in Dholera, we build
            lasting trust through superior service and unmatched dedication,
            setting us apart in the industry.
          </p>
        </div>
      </div>
    </section>
  );
}
