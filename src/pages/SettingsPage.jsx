import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SettingsPage = () => {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    setNickname(localStorage.getItem("nickname") || "");
    setAvatar(localStorage.getItem("avatar") || null);
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

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#161616] to-[#1f1f1f] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-[#141414] rounded-2xl shadow-[0_0_30px_rgba(163,230,53,0.15)] border border-gray-800 p-8 flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold text-lime-400 mb-8 tracking-wide">
          ⚙️ Profile Settings
        </h1>
        <div className="mb-6 flex flex-col items-center">
          <div className="relative group">
            <img
              src={avatar || "https://via.placeholder.com/150"}
              alt="avatar"
              className="w-40 h-40 rounded-full border-4 border-lime-400 object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <label className="absolute bottom-2 right-2 bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-bold cursor-pointer shadow-md hover:bg-lime-300 transition">
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
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Enter your nickname"
          className="w-full mb-6 px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-inner"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className="w-full py-3 rounded-xl bg-lime-400 text-black font-bold shadow-lg hover:bg-lime-300 transition"
        >
          Save Changes
        </motion.button>
      </motion.div>

      <ToastContainer />
    </div>
  );
};

export default SettingsPage;
