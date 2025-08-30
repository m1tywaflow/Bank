import React from "react";
import releases1 from "../../assets/About/releases1.png";
import releases2 from "../../assets/About/releases2.png";
import releases3 from "../../assets/About/releases3.png";
import releases4 from "../../assets/About/releases4.png";

export default function PressReleases() {
  const releases = [
    {
      img: releases1,
      title:
        "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
      location: "India",
      date: "05/11/2024",
      text: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",
    },
    {
      img: releases2,
      title:
        "YourBank Expands Branch Network with Opening of New Location in Chennai",
      location: "India",
      date: "12/11/2024",
      text: "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.",
    },
    {
      img: releases3,
      title:
        "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
      location: "India",
      date: "24/12/2024",
      text: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
    },
    {
      img: releases4,
      title:
        "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
      location: "India",
      date: "28/12/2024",
      text: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
    },
  ];

  return (
    <section className="bg-[#0C0C0C] text-white px-6 md:px-16 lg:px-28 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-lime-400 mb-4">
            Press Releases
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest happenings and exciting developments at
            YourBank through our press releases.
          </p>
        </div>

        {/* Карточки */}
        <div className="grid md:grid-cols-2 gap-8">
          {releases.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-2xl p-6 flex flex-col"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover rounded-xl mb-6"
              />
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                <span className="bg-[#0C0C0C] px-3 py-1 rounded-lg">
                  Location: {item.location}
                </span>
                <span className="bg-[#0C0C0C] px-3 py-1 rounded-lg">
                  Date: {item.date}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
