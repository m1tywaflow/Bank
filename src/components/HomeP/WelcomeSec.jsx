import React, { useState } from "react";
import { BadgeCheck } from "lucide-react";
import TransactionsCard from "../HomeP/TransactionsCard";
import ContainerBg from "../../assets/somethings/Container.png";
import { Link } from "react-router-dom";
import ind from "../../assets/somethings/IND.png";
import usa from "../../assets/somethings/USA.png";

export default function WelcomeSec() {
  const [fromCurrency, setFromCurrency] = useState({
    code: "INR",
    flag: ind,
    amount: 50000,
  });

  const [toCurrency, setToCurrency] = useState({
    code: "USD",
    flag: usa,
    amount: 12.0,
  });

  const handleExchange = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <section className="bg-[#1a1a1a] min-h-screen flex items-center py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Block */}
        <div>
          <div className="bg-[#262626] rounded-full w-fit px-4 py-2 flex items-center space-x-2 mb-6 text-center sm:text-left mx-auto md:mx-0">
            <BadgeCheck className="text-[#CAFF33] w-5 h-5" />
            <p className="text-white text-xs sm:text-sm">
              No LLC Required, No Credit Check.
            </p>
          </div>

          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-center md:text-left">
            Welcome to YourBank <br />
            Empowering Your{" "}
            <span className="text-[#CAFF33]">Financial Journey</span>
          </h1>

          <p className="text-[#E4E4E7] text-base sm:text-lg mb-8 text-center md:text-left">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="/profile"
              className="bg-[#CAFF33] rounded-full py-3 px-6 sm:py-4 sm:px-8 text-black font-medium flex items-center justify-center cursor-pointer hover:bg-[#405507] transition duration-200"
            >
              Open Account
            </Link>
          </div>
        </div>

        {/* Card Block */}
        <div className="flex justify-center md:justify-end w-full">
          <div
            className="relative rounded-2xl p-4 sm:p-6 shadow-lg w-full max-w-sm sm:max-w-md md:w-[420px] space-y-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${ContainerBg})` }}
          >
            {/* Floating label */}
            <div className="absolute -top-5 left-4 flex items-center gap-3 bg-[#22251B] text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-xl shadow-md">
              <span className="inline-flex items-center text-black justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-black/30 bg-[#CAFF33] font-bold">
                +
              </span>
              <div className="leading-tight">
                <div className="text-xs sm:text-sm font-semibold">
                  + $5000.00
                </div>
                <div className="text-[10px] sm:text-xs opacity-80">
                  Monthly Income
                </div>
              </div>
            </div>

            {/* Transactions */}
            <div>
              <TransactionsCard />
            </div>

            {/* Exchange */}
            <div>
              <h1 className="text-white text-base sm:text-lg font-semibold mb-4">
                Money Exchange
              </h1>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* From currency */}
                <div className="flex-1 flex justify-between items-center bg-neutral-800 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={fromCurrency.flag}
                      alt={fromCurrency.code}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-white font-medium text-sm sm:text-base">
                      {fromCurrency.code}
                    </span>
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {fromCurrency.amount}
                  </span>
                </div>

                {/* To currency */}
                <div className="flex-1 flex justify-between items-center bg-neutral-800 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={toCurrency.flag}
                      alt={toCurrency.code}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-white font-medium text-sm sm:text-base">
                      {toCurrency.code}
                    </span>
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {toCurrency.amount}
                  </span>
                </div>
              </div>

              <button
                onClick={handleExchange}
                className="w-full mt-4 bg-[#CAFF33] text-black py-2 rounded-xl font-medium hover:bg-[#405507] transition cursor-pointer duration-200 text-sm sm:text-base"
              >
                Exchange
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
