import React from "react";
import Individuals from "../../pages/Individuals";
import Business from "../../pages/Business";
import { Link } from "react-router-dom";
import subContImg from "../../assets/somethings/SubCont.png";
import managingIcon from "../../assets/UseCases/managingIcon.png";
import savingIcon from "../../assets/UseCases/savingIcon.png";
import homeownerIcon from "../../assets/UseCases/homeownerIcon.png";
import educationIcon from "../../assets/UseCases/educationIcon.png";

import startupIcon from "../../assets/UseCases/startupIcon.png";
import cashflowIcon from "../../assets/UseCases/cashflowIcon.png";
import businessIcon from "../../assets/UseCases/bussinesIcon.png";
import paymentIcon from "../../assets/UseCases/paymentIcon.png";

export default function UseCases() {
  return (
    <div className="px-6 max-w-7xl mx-auto py-20">
      <div className="items-center mb-10 text-center lg:text-left">
        <h1 className="text-[#CAFF33] text-3xl sm:text-4xl font-bold">
          Use Cases
        </h1>
        <p className="text-[#B3B3B3] py-4 max-w-2xl mx-auto lg:mx-0">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
        <div
          className="p-6 sm:p-10 rounded-2xl bg-cover"
          style={{ backgroundImage: `url(${subContImg})` }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
              <img
                src={managingIcon}
                alt="icon"
                className="mb-4 w-12 h-12 sm:w-16 sm:h-16"
              />
              <h1 className="text-white text-sm sm:text-base">
                Managing Personal Finances
              </h1>
            </div>
            <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
              <img
                src={savingIcon}
                alt="icon"
                className="mb-4 w-12 h-12 sm:w-16 sm:h-16"
              />
              <h1 className="text-white text-sm sm:text-base">
                Saving for the Future
              </h1>
            </div>
            <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
              <img
                src={homeownerIcon}
                alt="icon"
                className="mb-4 w-12 h-12 sm:w-16 sm:h-16"
              />
              <h1 className="text-white text-sm sm:text-base">Homeownership</h1>
            </div>
            <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
              <img
                src={educationIcon}
                alt="icon"
                className="mb-4 w-12 h-12 sm:w-16 sm:h-16"
              />
              <h1 className="text-white text-sm sm:text-base">
                Education Funding
              </h1>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">
            For Individuals
          </h2>
          <p className="text-[#B3B3B3] mb-8 text-sm sm:text-base">
            For individuals, our mortgage services pave the way to
            homeownership, and our flexible personal loans provide vital support
            during various life milestones. We also prioritize retirement
            planning, ensuring a financially secure future for our customers
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center mb-8 gap-6 sm:gap-0">
            <div className="flex-1 text-center sm:text-left sm:pr-6 sm:border-r sm:border-[#333]">
              <h3 className="text-[#CAFF33] text-2xl sm:text-3xl font-bold">
                78%
              </h3>
              <p className="text-[#B3B3B3] text-xs sm:text-sm">
                Secure Retirement Planning
              </p>
            </div>
            <div className="flex-1 text-center sm:text-left sm:px-6 sm:border-r sm:border-[#333]">
              <h3 className="text-[#CAFF33] text-2xl sm:text-3xl font-bold">
                63%
              </h3>
              <p className="text-[#B3B3B3] text-xs sm:text-sm">
                Manageable Debt Consolidation
              </p>
            </div>
            <div className="flex-1 text-center sm:text-left sm:pl-6">
              <h3 className="text-[#CAFF33] text-2xl sm:text-3xl font-bold">
                91%
              </h3>
              <p className="text-[#B3B3B3] text-xs sm:text-sm">
                Reducing financial burdens
              </p>
            </div>
          </div>

          <Link
            to="/individuals"
            className="block text-center sm:inline-block bg-black px-6 py-2 rounded-full text-white hover:bg-[#2A2A2A] duration-200 transition cursor-pointer"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">
            For Business
          </h2>
          <p className="text-[#B3B3B3] mb-8 text-sm sm:text-base">
            For businesses, we empower growth with working capital solutions
            that optimize cash flow, and our tailored financing options fuel
            business expansion. Whatever your financial aspirations, YourBank is
            committed to providing the right tools and support to achieve them
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center mb-8 gap-6 sm:gap-0">
            <div className="flex-1 text-center sm:text-left sm:pr-6 sm:border-r sm:border-[#333]">
              <h3 className="text-[#CAFF33] text-2xl sm:text-3xl font-bold">
                65%
              </h3>
              <p className="text-[#B3B3B3] text-xs sm:text-sm">
                Cash Flow Management
              </p>
            </div>
            <div className="flex-1 text-center sm:text-left sm:px-6 sm:border-r sm:border-[#333]">
              <h3 className="text-[#CAFF33] text-2xl sm:text-3xl font-bold">
                70%
              </h3>
              <p className="text-[#B3B3B3] text-xs sm:text-sm">
                Drive Business Expansion
              </p>
            </div>
            <div className="flex-1 text-center sm:text-left sm:pl-6">
              <h3 className="text-[#CAFF33] text-2xl sm:text-3xl font-bold">
                45%
              </h3>
              <p className="text-[#B3B3B3] text-xs sm:text-sm">
                Streamline payroll processing
              </p>
            </div>
          </div>

          <Link
            to="/business"
            className="block text-center sm:inline-block bg-black px-6 py-2 rounded-full text-white hover:bg-[#2A2A2A] duration-200 transition cursor-pointer"
          >
            Learn More
          </Link>
        </div>
        <div
          className="p-6 sm:p-10 rounded-2xl bg-cover"
          style={{ backgroundImage: `url(${subContImg})` }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
              <img
                src={startupIcon}
                alt="icon"
                className="mb-4 w-12 h-12 sm:w-16 sm:h-16"
              />
              <h1 className="text-white text-sm sm:text-base">
                Startups and Entrepreneurs
              </h1>
            </div>
            <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
              <img
                src={cashflowIcon}
                alt="icon"
                className="mb-4 w-12 h-12 sm:w-16 sm:h-16"
              />
              <h1 className="text-white text-sm sm:text-base">
                Cash Flow Management
              </h1>
            </div>
            <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
              <img
                src={businessIcon}
                alt="icon"
                className="mb-4 w-12 h-12 sm:w-16 sm:h-16"
              />
              <h1 className="text-white text-sm sm:text-base">
                Business Expansion
              </h1>
            </div>
            <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
              <img
                src={paymentIcon}
                alt="icon"
                className="mb-4 w-12 h-12 sm:w-16 sm:h-16"
              />
              <h1 className="text-white text-sm sm:text-base">
                Payment Solutions
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
