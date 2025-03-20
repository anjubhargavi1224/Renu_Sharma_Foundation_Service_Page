import React from "react";
import NGO5 from "../assets/NGO5.jpg";
import NGO7 from "../assets/NGO7.jpg";
import NGO8 from "../assets/NGO8.jpg";

const featuresData = [
  {
    imgSrc: NGO5,
    altText: "Food & Nutrition Program",
    title: "Food & Nutrition Program",
    description:
      "Distributing food packages, running community kitchens, and ensuring nutritious meals for the homeless and needy.",
  },
  {
    imgSrc: NGO7,
    altText: "Disaster Relief Assistance",
    title: "Disaster Relief Assistance",
    description:
      "Providing emergency aid, shelter, and rehabilitation support during natural disasters and crises.",
  },
  {
    imgSrc: NGO8,
    altText: "Environmental Conservation",
    title: "Environmental Conservation",
    description:
    "Conducting tree plantation drives, plastic-free campaigns, and wildlife conservation efforts to protect our planet.",
  },
];

const Features = () => {
  return (
    <section className="text-center py-16 bg-[#001f3f]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white  mb-10">
          Services We Provide
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <li key={index} className="flex justify-center">
              <div className="bg-white opacity-50 p-6 shadow-lg rounded-lg max-w-sm text-center">
                <img
                  src={feature.imgSrc}
                  alt={feature.altText}
                  className="w-24 mx-auto rounded-lg"
                />
                <h3 className="text-xl font-semibold text-gray-600 mt-6">
                  {feature.title}
                </h3>
                <p className="text-gray-700 mt-4">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
