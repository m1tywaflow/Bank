import React from "react";
import welcImg from "../../assets/Careers/Image.png";

export default function WelcomeSec() {
  return (
    <section className="w-full bg-[#1a1a1a] flex justify-center py-40 px-6 ">
      <div className="max-w-6xl w-full bg-[#111] rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        <div className="flex-1 bg-[#111] p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Welcome to <span className="text-lime-400">YourBank</span> Careers!
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-6 leading-relaxed">
            Join our team and embark on a rewarding journey in the banking
            industry. At YourBank, we are committed to fostering a culture of
            excellence and providing opportunities for professional growth. With
            a focus on innovation, customer service, and integrity, we strive to
            make a positive impact in the lives of our customers and
            communities. Join us today and be a part of our mission to shape the
            future of banking.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={welcImg}
            alt="Welcome"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
