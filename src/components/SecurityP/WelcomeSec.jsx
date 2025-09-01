import React from "react";
import welcomeImg from "../../assets/Security/welcomeImg.png";
export default function WelcomeSec() {
  return (
    <section className="w-full bg-[#1a1a1a] flex justify-center py-40 px-6 ">
      <div className="max-w-7xl w-full bg-[#111] rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        <div className="flex-1 bg-[#111] p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Your Security is Our <span className="text-lime-400">Top Priority</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-6 leading-relaxed">
            At YourBank, we understand the importance of keeping your financial
            information secure. We employ robust security measures and advanced
            technologies to protect your personal and financial data. Rest
            assured that when you bank with us, your security is our utmost
            priority.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={welcomeImg}
            alt="Welcome"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
