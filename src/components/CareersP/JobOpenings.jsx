import React from "react";
import { Briefcase, MapPin, BriefcaseBusiness } from "lucide-react";
export default function JobOpenings() {
  const openings = [
    {
      title: "Relationship Manager",
      location: "India",
      department: "Retail Banking",
      about: `As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We're seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.`,
      requirements: [
        "Bachelor's degree in Business, Finance, or a related field",
        "Minimum of 5 years of experience in sales or relationship management in the banking industry",
        "Proven track record of meeting and exceeding sales targets",
        "Excellent interpersonal and negotiation skills",
        "Strong knowledge of banking products and services",
      ],
    },
    {
      title: "Risk Analyst",
      location: "India",
      department: "Risk Management",
      about: `As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.`,
      requirements: [
        "Bachelor's degree in Finance, Economics, or a related field",
        "Minimum of 2 years of experience in risk management or a similar role",
        "Proficiency in risk analysis tools and techniques",
        "Strong analytical and problem-solving skills",
        "Knowledge of regulatory requirements and industry best practices",
      ],
    },
    {
      title: "IT Security Specialist",
      location: "India",
      department: "Information Technology",
      about: `As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We're seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.`,
      requirements: [
        "Bachelor's degree in Computer Science, Information Security, or a related field",
        "Minimum of 5 years of experience in IT security or a similar role",
        "In-depth knowledge of network security protocols and technologies",
        "Familiarity with regulatory frameworks such as PCI DSS and GDPR",
        "Professional certifications such as CISSP or CISM are preferred",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#1a1a1a] flex justify-center py-20 px-6">
      <div className="max-w-6xl w-full">
        <div className="text-center md:text-left">
          <h1 className="text-[#CAFF33] text-4xl font-bold">Job Openings</h1>
          <p className="text-[#B3B3B3] text-sm pt-4 max-w-2xl">
            Explore exciting job openings at YourBank, where we value talent,
            innovation, and a passion for customer service. Join our team and be
            part of shaping a brighter future in the banking industry
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {openings.map((job, idx) => (
            <div
              key={idx}
              className="bg-[#111111] rounded-2xl p-6 shadow-md border border-[#2a2a2a]"
            >
              <h2 className="text-white text-xl font-semibold">{job.title}</h2>

              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> Location: {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase size={14} /> Department: {job.department}
                </span>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-medium">About This Job</h3>
                <p className="text-[#B3B3B3] text-sm mt-2 leading-relaxed">
                  {job.about}
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-medium">
                  Requirements & Qualifications
                </h3>
                <ul className="text-[#B3B3B3] text-sm mt-2 space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <BriefcaseBusiness size={20} />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 px-5 py-2 rounded-xl bg-[#CAFF33] text-black font-medium hover:bg-[#405507] duration-200 transition cursor-pointer">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
