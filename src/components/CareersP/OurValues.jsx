import React from "react";

export default function OurValues() {
  return (
    <section className="w-full bg-[#1a1a1a] flex justify-center py-20 px-6">
      <div className="max-w-7xl w-full">
        <div className="text-center md:text-left max-w-3xl">
          <h1 className="text-4xl font-bold text-white">
            Our <span className="text-lime-400">Values</span>
          </h1>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            At YourBank, our values form the foundation of our organization and
            guide our actions. We believe in upholding the highest standards of
            integrity, delivering exceptional service, and embracing innovation.
            These values define our culture and shape the way we work together
            to achieve our goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="flex flex-col border-l-2 border-lime-400 pl-4">
            <h2 className="text-4xl font-semibold text-[#4C4C4D]">Integrity</h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              We conduct ourselves with utmost honesty, transparency, and
              ethical behavior. We believe in doing what is right for our
              customers, colleagues, and stakeholders, even when faced with
              difficult choices.
            </p>
          </div>
          <div className="flex flex-col border-l-2 border-lime-400 pl-4">
            <h2 className="text-4xl font-semibold text-[#4C4C4D]">
              Customer Centricity
            </h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Our customers are at the heart of everything we do. We are
              dedicated to understanding their needs, providing personalized
              solutions, and delivering exceptional service that exceeds
              expectations.
            </p>
          </div>
          <div className="flex flex-col border-l-2 border-lime-400 pl-4">
            <h2 className="text-4xl font-semibold text-[#4C4C4D]">
              Collaboration
            </h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              We foster a collaborative and inclusive work environment, where
              teamwork and diversity are celebrated. By leveraging the unique
              strengths and perspectives of our employees, we drive innovation
              and achieve greater success together.
            </p>
          </div>
          <div className="flex flex-col border-l-2 border-lime-400 pl-4">
            <h2 className="text-4xl font-semibold text-[#4C4C4D]">
              Innovation
            </h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              We embrace change and constantly seek innovative solutions to meet
              the evolving needs of our customers. We encourage our employees to
              think creatively, challenge conventions, and explore new ideas to
              drive the future of banking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
