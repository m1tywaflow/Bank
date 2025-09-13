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
    // change dollar to indian wtf xd
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <section className="bg-[#1a1a1a] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="bg-[#262626] rounded-full w-fit px-4 py-2 flex items-center space-x-2 mb-6">
            <BadgeCheck className="text-[#CAFF33] w-5 h-5" />
            <p className="text-white text-sm">
              No LLC Required, No Credit Check.
            </p>
          </div>
          <h1 className="text-white text-5xl font-bold leading-tight mb-6">
            Welcome to YourBank <br />
            Empowering Your
            <span className="text-[#CAFF33]">Financial Journey</span>
          </h1>
          <p className="text-[#E4E4E7] text-lg mb-8">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </p>

          <Link
            to="/profile"
            className="bg-[#CAFF33] rounded-full py-4 px-8 text-black font-medium w-fit flex items-center justify-center cursor-pointer hover:bg-[#405507] transition duration-200"
          >
            <>Open Account</>
          </Link>
        </div>
        <div className="flex justify-end">
          <div
            className="relative rounded-2xl p-6 shadow-lg w-full md:w-[420px] space-y-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${ContainerBg})` }}
          >
            <div className="absolute -top-5 left-4 flex items-center gap-3 bg-[#22251B] text-white text-sm font-medium px-4 py-2 rounded-xl shadow-md">
              <span className="inline-flex items-center text-black justify-center w-7 h-7 rounded-full border border-black/30 bg-[#CAFF33] font-bold">
                +
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold">+ $5000.00</div>
                <div className="text-xs opacity-80">Monthly Income</div>
              </div>
            </div>
            <div>
              <TransactionsCard />
            </div>
            <div>
              <h1 className="text-white text-lg font-semibold mb-4">
                Money Exchange
              </h1>

              <div className="flex gap-3">
                {/* From currency */}
                <div className="flex-1 flex justify-between items-center bg-neutral-800 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={fromCurrency.flag}
                      alt={fromCurrency.code}
                      className="w-6 h-6"
                    />
                    <span className="text-white font-medium">
                      {fromCurrency.code}
                    </span>
                  </div>
                  <span className="text-white font-semibold">
                    {fromCurrency.amount}
                  </span>
                </div>

                {/* To currency */}
                <div className="flex-1 flex justify-between items-center bg-neutral-800 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={toCurrency.flag}
                      alt={toCurrency.code}
                      className="w-6 h-6"
                    />
                    <span className="text-white font-medium">
                      {toCurrency.code}
                    </span>
                  </div>
                  <span className="text-white font-semibold">
                    {toCurrency.amount}
                  </span>
                </div>
              </div>

              <button
                onClick={handleExchange}
                className="w-full mt-4 bg-[#CAFF33] text-black py-2 rounded-xl font-medium hover:bg-[#405507] transition cursor-pointer duration-200"
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
