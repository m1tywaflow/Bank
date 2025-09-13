import React from "react";
import { Briefcase, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";
export default function Business() {
  return (
    <section className="bg-[#1a1a1a] text-white min-h-screen py-40 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Заголовок */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">
            Solutions for <span className="text-[#CAFF33]">Businesses</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Whether you’re a startup or a growing enterprise, we deliver
            financial tools to manage your cash flow, expand your company, and
            support your employees.
          </p>
        </div>

        {/* Блок услуг */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <DollarSign className="text-[#CAFF33]" /> Cash Flow Management
            </h2>
            <p className="text-gray-300">
              Optimize your company’s liquidity with tailored solutions for
              invoicing, collections, and daily operations.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Briefcase className="text-[#CAFF33]" /> Business Expansion
            </h2>
            <p className="text-gray-300">
              Access financing options that help you scale — from small business
              loans to investment advisory.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Users className="text-[#CAFF33]" /> Payroll Solutions
            </h2>
            <p className="text-gray-300">
              Streamline employee payroll with our secure and automated payment
              systems.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">
              🚀 Startups & Entrepreneurs
            </h2>
            <p className="text-gray-300">
              Get your business off the ground with funding, mentorship, and
              financial planning.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">💳 Payment Solutions</h2>
            <p className="text-gray-300">
              Accept payments globally with our merchant services and online
              payment gateways.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">📊 Business Advisory</h2>
            <p className="text-gray-300">
              Strategic consulting to help you make smarter financial decisions.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link
            to="/profile"
            className="bg-[#CAFF33] text-black px-8 py-4 rounded-full font-medium hover:bg-[#405507] transition"
          >
            Get Business Account
          </Link>
        </div>
      </div>
    </section>
  );
}
