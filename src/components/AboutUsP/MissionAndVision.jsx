import React from "react";
import missionImg from "../../assets/About/mission.png";
import visionImg from "../../assets/About/vision.png";

export default function MissionAndVision() {
  return (
    <section className="bg-[#0C0C0C] text-white px-6 md:px-16 lg:px-28 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-lime-400 mb-4">
            Mission & Vision
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We envision being a leading force in the industry, driven by
            innovation, integrity, and inclusivity, creating a brighter
            financial future for individuals and businesses while maintaining a
            strong commitment to customer satisfaction and community development
          </p>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="flex justify-center">
            <img
              src={missionImg}
              alt="Mission"
              className="w-full max-w-md rounded-2xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              At <span className="font-semibold">YourBank</span>, our mission is
              to empower our customers to achieve financial success. We are
              dedicated to delivering innovative banking solutions that cater to
              their unique needs. Through personalized services, expert
              guidance, and cutting-edge technology, we aim to build strong,
              lasting relationships with our customers. Our mission is to be
              their trusted partner, helping them navigate their financial
              journey and realize their dreams.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              Our vision at <span className="font-semibold">YourBank</span> is
              to redefine banking by creating a seamless and personalized
              experience for our customers. We envision a future where banking
              is accessible, transparent, and tailored to individual
              preferences. Through continuous innovation and collaboration, we
              strive to be at the forefront of the industry, setting new
              standards for customer-centric banking. Our vision is to be the
              preferred financial institution, known for our unwavering
              commitment to excellence, trust, and customer satisfaction.
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={visionImg}
              alt="Vision"
              className="w-full max-w-md rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
