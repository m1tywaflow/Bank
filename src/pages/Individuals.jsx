import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
export default function Individuals() {
  return (
    <section className="bg-[#1a1a1a] text-white min-h-screen py-40 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Заголовок */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">
            Banking Solutions for{" "}
            <span className="text-[#CAFF33]">Individuals</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Whether you’re planning for your future, buying your first home, or
            simply managing daily expenses — we provide tailored solutions to
            help you achieve financial confidence.
          </p>
        </div>

        {/* Блок услуг */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">🏡 Homeownership</h2>
            <p className="text-gray-300">
              Flexible mortgage plans designed to fit your lifestyle, with
              competitive rates and expert guidance every step of the way.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#CAFF33]" size={18} /> Low
                interest rates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#CAFF33]" size={18} /> Fast online
                approval
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#CAFF33]" size={18} /> Flexible
                repayment terms
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">📚 Education Funding</h2>
            <p className="text-gray-300">
              Secure your children’s future with loans and savings plans
              dedicated to education.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#CAFF33]" size={18} /> Student
                loans with low rates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#CAFF33]" size={18} /> Savings
                accounts with bonuses
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">💳 Personal Finance</h2>
            <p className="text-gray-300">
              From credit cards to daily expense tracking — manage your finances
              with ease.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#CAFF33]" size={18} /> Digital
                banking app
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#CAFF33]" size={18} /> Rewards
                programs
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">💰 Saving for the Future</h2>
            <p className="text-gray-300">
              Build long-term wealth with savings accounts, deposits, and
              retirement planning.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#CAFF33]" size={18} /> Retirement
                plans
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#CAFF33]" size={18} /> High-yield
                savings
              </li>
            </ul>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Link
            to="/profile"
            className="bg-[#CAFF33] text-black px-8 py-4 rounded-full font-medium hover:bg-[#405507] transition"
          >
            Open Your Account
          </Link>
        </div>
      </div>
    </section>
  );
}
