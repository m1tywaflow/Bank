import React from "react";
import firstImg from "../../assets/About/first.png";

export default function WelcomeSec() {
  return (
    <section className="w-full bg-[#1a1a1a] flex justify-center py-40 px-6 ">
      <div className="max-w-6xl w-full bg-[#111] rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        <div className="flex-1 bg-[#111] p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Where Banking Meets{" "}
            <span className="text-lime-400">Excellence!</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-6 leading-relaxed">
            At YourBank, we believe that banking should be more than just
            transactions. It should be an experience that empowers individuals
            and businesses to thrive and reach their financial goals. As a
            trusted financial institution, we are committed to delivering
            exceptional banking services that go beyond expectations. With a
            focus on innovation, personalized solutions, and unwavering
            integrity, we strive to provide the best banking experience for our
            valued customers. Join us on this exciting journey and discover a
            new level of banking excellence.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={firstImg}
            alt="Welcome"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
