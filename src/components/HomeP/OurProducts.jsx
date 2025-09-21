import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cheking from "../../assets/OurProducts/checking.png";
import saving from "../../assets/OurProducts/saving.png";
import loans from "../../assets/OurProducts/loans.png";

export default function OurProducts() {
  const [activeTab, setActiveTab] = useState("individuals");

  const individualProducts = [
    {
      img: cheking,
      title: "Checking Accounts",
      desc: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
    },
    {
      img: saving,
      title: "Savings Accounts",
      desc: "Build your savings with our competitive interest rates and flexible savings account options. Whether you’re saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
    },
    {
      img: loans,
      title: "Loans and Mortgages",
      desc: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
    },
  ];

  const businessProducts = [
    {
      img: loans,
      title: "Business Checking",
      desc: "Manage your business finances effortlessly with accounts designed for efficiency and growth. Get access to online tools and dedicated business support.",
    },
    {
      img: cheking,
      title: "Business Savings",
      desc: "Grow your company’s reserves with competitive rates and flexible savings solutions tailored to businesses of all sizes.",
    },
    {
      img: saving,
      title: "Commercial Loans",
      desc: "Fuel your business ambitions with our range of loan and credit options, from equipment financing to expansion projects.",
    },
  ];

  const products =
    activeTab === "individuals" ? individualProducts : businessProducts;

  return (
    <div className="px-6 max-w-7xl mx-auto py-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-white font-bold">
          Our <span className="text-[#CAFF33]">Products</span>
        </h1>
        <div className="bg-[#111] rounded-2xl w-fit p-2 flex gap-2 items-center">
          <button
            onClick={() => setActiveTab("individuals")}
            className={`rounded-2xl px-4 py-2 font-medium transition ${
              activeTab === "individuals"
                ? "bg-[#CAFF33] text-black"
                : "text-white hover:text-[#CAFF33]"
            }`}
          >
            For Individuals
          </button>
          <button
            onClick={() => setActiveTab("business")}
            className={`rounded-2xl px-4 py-2 font-medium transition ${
              activeTab === "business"
                ? "bg-[#CAFF33] text-black"
                : "text-white hover:text-[#CAFF33]"
            }`}
          >
            For Businesses
          </button>
        </div>
      </div>

      <p className="text-[#B3B3B3] pt-6 max-w-2xl">
        Discover a range of comprehensive and customizable banking products at
        YourBank, designed to suit your unique financial needs and aspirations
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12 pt-16 relative">
        <AnimatePresence mode="wait">
          {products.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="text-center border-r border-[#262626] last:border-none px-6"
            >
              <div className="flex justify-center mb-4">
                <img src={item.img} alt={item.title} className="w-16 h-16" />
              </div>
              <h2 className="text-white font-semibold mb-2">{item.title}</h2>
              <p className="text-[#B3B3B3] text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
