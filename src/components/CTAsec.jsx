import React from "react";
import subCont from "../assets/somethings/SubCont.png";

export default function CTAsec() {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div
        className="relative rounded-2xl p-6 md:p-10 shadow-lg w-full md:w-[900px] bg-cover bg-center flex flex-col md:flex-row justify-between items-center"
        style={{ backgroundImage: `url(${subCont})` }}
      >
        <div className="space-y-4 md:max-w-[70%]">
          <h1 className="text-3xl md:text-4xl text-white leading-snug">
            Start your financial journey with{" "}
            <span className="text-[#CAFF33]">YourBank today!</span>
          </h1>
          <p className="text-[#B3B3B3] text-sm md:text-base">
            Ready to take control of your finances? Join YourBank now, and let
            us help you achieve your financial goals with our tailored solutions
            and exceptional customer service
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <button className="px-6 py-2 rounded-full bg-[#CAFF33] text-black font-medium hover:bg-[#405507] transition cursor-pointer">
            Open Account
          </button>
        </div>
      </div>
    </div>
  );
}
