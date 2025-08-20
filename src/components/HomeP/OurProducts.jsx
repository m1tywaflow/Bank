import React from "react";
import cheking from "../../assets/OurProducts/checking.png";
import saving from "../../assets/OurProducts/saving.png";
import loans from "../../assets/OurProducts/loans.png";

export default function OurProducts() {
  return (
    <div className="px-6 max-w-7xl mx-auto py-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-white font-bold">
          Our <span className="text-[#CAFF33]">Products</span>
        </h1>
        <div className="bg-[#111] rounded-2xl w-fit p-2 flex gap-2 items-center">
          <button className="bg-[#CAFF33] rounded-2xl px-4 py-2 text-black font-medium">
            For Individuals
          </button>
          <button className="px-4 py-2 text-white">For Businesses</button>
        </div>
      </div>
      <p className="text-[#B3B3B3] pt-6 max-w-2xl">
        Discover a range of comprehensive and customizable banking products at
        YourBank, designed to suit your unique financial needs and aspirations
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-12 pt-16">
        <div className="text-center border-r border-[#262626] last:border-none px-6">
          <div className="flex justify-center mb-4">
            <img src={cheking} alt="Checking" className="w-16 h-16" />
          </div>
          <h2 className="text-white font-semibold mb-2">Checking Accounts</h2>
          <p className="text-[#B3B3B3] text-sm">
            Enjoy easy and convenient access to your funds with our range of
            checking account options. Benefit from features such as online and
            mobile banking, debit cards, and free ATM access.
          </p>
        </div>
        <div className="text-center border-r border-[#262626] last:border-none px-6">
          <div className="flex justify-center mb-4">
            <img src={saving} alt="Saving" className="w-16 h-16" />
          </div>
          <h2 className="text-white font-semibold mb-2">Savings Accounts</h2>
          <p className="text-[#B3B3B3] text-sm">
            Build your savings with our competitive interest rates and flexible
            savings account options. Whether you’re saving for a specific goal
            or want to grow your wealth over time, we have the right account for
            you.
          </p>
        </div>
        <div className="text-center px-6">
          <div className="flex justify-center mb-4">
            <img src={loans} alt="Loans" className="w-16 h-16" />
          </div>
          <h2 className="text-white font-semibold mb-2">Loans and Mortgages</h2>
          <p className="text-[#B3B3B3] text-sm">
            Realize your dreams with our flexible loan and mortgage options.
            From personal loans to home mortgages, our experienced loan officers
            are here to guide you through the application process and help you
            secure the funds you need.
          </p>
        </div>
      </div>
    </div>
  );
}
