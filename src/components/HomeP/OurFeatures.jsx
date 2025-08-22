import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Features() {
  const [activeTab, setActiveTab] = useState("Online Banking");

  const featuresData = {
    "Online Banking": [
      {
        title: "24/7 Account Access",
        desc: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
      },
      {
        title: "Mobile Banking App",
        desc: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
      },
      {
        title: "Secure Transactions",
        desc: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
      },
      {
        title: "Bill Pay and Transfers",
        desc: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
      },
    ],
    "Financial Tools": [
      {
        title: "Budgeting Assistance",
        desc: "Track your expenses, set savings goals, and monitor your financial health with our smart budgeting tools.",
      },
      {
        title: "Investment Insights",
        desc: "Get AI-powered recommendations and insights to grow your investments and maximize returns.",
      },
      {
        title: "Retirement Planning",
        desc: "Plan your financial future with customized retirement strategies tailored to your goals.",
      },
      {
        title: "Loan Calculators",
        desc: "Easily estimate payments, interest, and timelines for various loan products.",
      },
    ],
    "Customer Support": [
      {
        title: "Live Chat Assistance",
        desc: "Connect instantly with our support team for quick resolutions to your banking queries.",
      },
      {
        title: "Dedicated Account Managers",
        desc: "Enjoy personalized service with dedicated account managers for premium customers.",
      },
      {
        title: "Knowledge Base",
        desc: "Access a comprehensive library of articles, FAQs, and guides to answer common questions.",
      },
      {
        title: "24/7 Hotline",
        desc: "Our support hotline is available around the clock for urgent banking assistance.",
      },
    ],
  };

  return (
    <div className="px-6 max-w-7xl mx-auto py-20">
      {/* Заголовок */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          Our <span className="text-[#CAFF33]">Features</span>
        </h1>
        <p className="text-[#B3B3B3] py-4 max-w-3xl">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </p>
      </div>

      {/* Основной блок */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Левая панель с табами */}
        <div className="bg-black/40 p-6 rounded-2xl flex flex-col gap-4 h-56">
          {Object.keys(featuresData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-[#CAFF33] text-black"
                  : "bg-black text-white hover:bg-[#1a1a1a] "
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Правая часть с карточками */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuresData[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="bg-black/40 p-6 rounded-2xl hover:bg-black/60 transition duration-200 cursor-pointer h-48 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
                <ArrowUpRight className="text-[#CAFF33] w-5 h-5" />
              </div>
              <p className="text-[#B3B3B3] mt-3 text-sm leading-relaxed line-clamp-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
