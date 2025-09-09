import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getAuth } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/somethings/logo.png";
import "react-toastify/dist/ReactToastify.css";
import VirtualBankCard from "../components/ProfileP/VirtualBankCard";

const ProfilePage = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    const storedAvatar = localStorage.getItem("avatar");

    if (storedNickname) setNickname(storedNickname);
    if (storedAvatar) setAvatar(storedAvatar);

    setLoading(false);
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("avatar", avatar);

    toast.success("✅ Changes saved!", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0f0f0f]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-lime-400 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#161616] to-[#1f1f1f] p-6 md:p-40">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-12">
        <img src={logo} alt="Logo" className="h-16 w-16" />
        <span className="text-white font-semibold text-4xl">
          YourBanK account
        </span>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-[#141414] border border-gray-800 rounded-3xl shadow-[0_0_30px_rgba(163,230,53,0.2)] p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Avatar */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative">
            <img
              src={avatar || "https://via.placeholder.com/150"}
              alt="avatar"
              className="w-40 h-40 rounded-full object-cover border-4 border-lime-400 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]"
            />
            <label className="absolute bottom-0 right-0 bg-lime-400 text-black rounded-full px-3 py-1 text-xs font-bold cursor-pointer hover:bg-lime-300 transition">
              Edit
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Nickname */}
        <div className="flex flex-col items-center md:items-start flex-1">
          <div className="text-white text-2xl font-semibold text-center md:text-left">
            {nickname || "Your nickname"}
          </div>

          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Edit nickname"
            className="mt-4 w-full max-w-xs px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white 
                       focus:outline-none focus:ring-2 focus:ring-lime-400"
          />

          <button
            onClick={handleSave}
            className="mt-6 px-8 py-3 rounded-full bg-lime-400 text-black font-bold hover:bg-lime-300 
                       transition transform hover:scale-105 shadow-lg"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="flex flex-wrap justify-center gap-6 border-b border-gray-700">
          <button
            className={`pb-2 px-4 ${
              activeTab === "overview"
                ? "border-b-2 border-lime-400 text-lime-400"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`pb-2 px-4 ${
              activeTab === "map"
                ? "border-b-2 border-lime-400 text-lime-400"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("map")}
          >
            Cards
          </button>
          <button
            className={`pb-2 px-4 ${
              activeTab === "activity"
                ? "border-b-2 border-lime-400 text-lime-400"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("activity")}
          >
            Activity
          </button>
        </div>

        <div className="bg-[#141414] border border-gray-800 rounded-2xl shadow-lg p-6 md:p-8 mt-6 min-h-[250px]">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white space-y-4 w-full max-w-2xl mx-auto"
              >
                <h2 className="text-xl font-semibold text-lime-400">
                  Account Info
                </h2>
                <p>
                  Email:{" "}
                  <span className="text-gray-300">{user?.email || "N/A"}</span>
                </p>
                <p>
                  Status: <span className="text-green-400">Active</span>
                </p>
                <p>
                  Member since:{" "}
                  <span className="text-gray-300">January 2024</span>
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
                className="flex justify-center w-full"
              >
                <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
                  <VirtualBankCard
                    card={{
                      brand: "VISA",
                      last4: "9876",
                      holder: nickname || "John Doe",
                      expiry: "09/27",
                      cvv: "123",
                    }}
                  />
                </div>
              </motion.div>
            )}

            {activeTab === "activity" && (
              <motion.div
                key="activity"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white space-y-4 w-full max-w-2xl mx-auto"
              >
                <h2 className="text-xl font-semibold text-lime-400">
                  Recent Activity
                </h2>
                <ul className="space-y-2">
                  <li>💸 Payment received: $50</li>
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

      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
