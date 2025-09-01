import React from "react";
import competitiveIcon from "../../assets/Careers/competitiveIcon.png";
import healthIcon from "../../assets/Careers/healthIcon.png";
import retirementIcon from "../../assets/Careers/retirementicon.png";
import workLifeIcon from "../../assets/Careers/work-lifeIcon.png";

export default function OurBenefits() {
  const benefits = [
    {
      icon: competitiveIcon,
      title: "Competitive Compensation",
      text: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
    },
    {
      icon: healthIcon,
      title: "Health and Wellness",
      text: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
    },
    {
      icon: retirementIcon,
      title: "Retirement Planning",
      text: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
    },
    {
      icon: workLifeIcon,
      title: "Work-Life Balance",
      text: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
    },
  ];

  return (
    <section className="w-full bg-[#1a1a1a] flex justify-center py-20 px-6">
      <div className="max-w-7xl w-full">
        <div className="text-center md:text-left">
          <h1 className="text-white text-4xl font-bold">
            Our <span className="text-[#CAFF33]">Benefits</span>
          </h1>
          <p className="text-[#B3B3B3] text-sm pt-4 max-w-2xl">
            At YourBank, we value our employees and are dedicated to their
            well-being and success. We offer a comprehensive range of benefits
            designed to support their personal and professional growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl p-6 flex items-start gap-4 relative overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-lime-400 opacity-20 rounded-full blur-3xl"></div>
              <div className="flex-shrink-0 rounded-full flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="w-16 h-16" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
