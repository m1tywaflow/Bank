import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/somethings/logo.png";
import VirtualBankCard from "../components/ProfileP/VirtualBankCard";
import FAQ from "../components/HomeP/FAQ";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ProfilePage = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [cards, setCards] = useState([]);

  const [expenses] = useState([
    { name: "Shopping", value: 400 },
    { name: "Food", value: 300 },
    { name: "Travel", value: 200 },
    { name: "Subscriptions", value: 100 },
    { name: "Other", value: 150 },
  ]);

  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    const storedAvatar = localStorage.getItem("avatar");
    const storedCards = localStorage.getItem("cards");

    if (storedNickname) setNickname(storedNickname);
    if (storedAvatar) setAvatar(storedAvatar);
    if (storedCards) setCards(JSON.parse(storedCards));

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0f0f0f]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-lime-400 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#161616] to-[#1f1f1f] p-4 sm:p-6 md:p-12 lg:p-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-30 pt-20 text-center md:text-left">
        <img src={logo} alt="Logo" className="h-14 w-14 sm:h-16 sm:w-16" />
        <span className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
          YourBanK account
        </span>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-[#141414] border border-gray-800 rounded-3xl shadow-[0_0_30px_rgba(163,230,53,0.2)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Avatar */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={avatar || "https://via.placeholder.com/150"}
            alt="avatar"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-lime-400 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]"
          />
        </div>

        {/* Nickname */}
        <div className="flex flex-col items-center md:items-start flex-1 text-center md:text-left">
          <div className="text-white text-xl sm:text-2xl font-semibold">
            {nickname || "Your nickname"}
          </div>
        </div>

        {/* Settings */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto mt-4 md:mt-0">
          <h1 className="text-green-500 font-bold">Online</h1>
          <Link
            to="/settings"
            className="mt-4 px-4 sm:px-6 py-2 bg-lime-500 text-black font-medium rounded-xl shadow-md hover:bg-lime-400 transition"
          >
            Settings
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 border-b border-gray-700">
          <button
            className={`pb-2 px-3 sm:px-4 ${
              activeTab === "overview"
                ? "border-b-2 border-lime-400 text-lime-400"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`pb-2 px-3 sm:px-4 ${
              activeTab === "map"
                ? "border-b-2 border-lime-400 text-lime-400"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("map")}
          >
            Cards
          </button>
          <button
            className={`pb-2 px-3 sm:px-4 ${
              activeTab === "activity"
                ? "border-b-2 border-lime-400 text-lime-400"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("activity")}
          >
            Activity
          </button>
        </div>

        <div className="bg-[#141414] border border-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mt-6 min-h-[250px]">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white space-y-4 w-full max-w-2xl mx-auto text-sm sm:text-base"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-lime-400">
                  Account Info
                </h2>
                <p>
                  Email:
                  <span className="text-gray-300">{user?.email || "N/A"}</span>
                </p>
                <p>
                  Status: <span className="text-green-400">Active</span>
                </p>
                <p>
                  Member since:
                  <span className="text-gray-300">September 2025</span>
                </p>
                <p>
                  Plan: <span className="text-gray-300">Free</span>
                </p>
              </motion.div>
            )}

            {activeTab === "map" && (
              <motion.div
                key="map"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-6 w-full"
              >
                {cards.length > 0 ? (
                  cards.map((card, index) => (
                    <div
                      key={index}
                      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col items-center"
                    >
                      <VirtualBankCard card={card} />
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-center">
                    You don't have any cards yet.
                  </p>
                )}
              </motion.div>
            )}

            {activeTab === "activity" && (
              <motion.div
                key="activity"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white space-y-4 w-full max-w-2xl mx-auto text-sm sm:text-base"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-lime-400">
                  Recent Activity
                </h2>
                <ul className="space-y-2">
                  <li>💸 Payment received: $0</li>
                  <li>🛒 Purchased: Premium Plan</li>
                  <li>🔑 Password changed</li>
                  <li>📧 Email verified</li>
                  <li>🚀 Logged in from new device</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bonuses */}
      <div className="max-w-4xl mx-auto mt-12 bg-[#141414] border border-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 md:p-10 text-white text-sm sm:text-base">
        <h2 className="text-xl sm:text-2xl font-semibold text-lime-400 mb-4">
          🎁 Bonuses & Promotions
        </h2>
        <ul className="space-y-2 sm:space-y-3">
          <li>💵 5% Cashback on online purchases</li>
          <li>✈️ Free airport lounge access (Premium users)</li>
          <li>🎮 Discounts on gaming subscriptions</li>
          <li>📈 Referral bonus: Invite a friend and earn $10</li>
        </ul>
      </div>

      {/* Financial Statistics */}
      <div className="max-w-4xl mx-auto mt-12 bg-[#141414] border border-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 md:p-10 text-white">
        <h2 className="text-xl sm:text-2xl font-semibold text-lime-400 mb-6">
          📊 Financial Statistics
        </h2>
        <div className="h-64 sm:h-72 md:h-80">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={expenses}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="80%"
                fill="#a3e635"
                label
              >
                {expenses.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      ["#a3e635", "#f43f5e", "#f59e0b", "#6366f1"][index % 5]
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <FAQ />
    </div>
  );
};

export default ProfilePage;
