"use client";

import { useEffect, useState } from "react";

const ServiceSection = () => {
  const stats = [
    { value: 5000, label: "Happy Faces" },
    { value: 12, label: "Decade of Experience", suffix: " + years" },
    { value: 8, label: "Countries", suffix: " +" },
    { value: 27, label: "States", suffix: " +" },
    { value: 295, label: "Cities", suffix: " +" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[i] < stat.value) {
            newCounts[i] += Math.ceil(stat.value / 100);
          } else {
            clearInterval(intervals[i]);
            newCounts[i] = stat.value;
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-12 max-w-7xl mx-auto bg-white text-center">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <h2 className="text-3xl font-bold">
              {counts[i]}
              {stat.suffix || " +"}
            </h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
