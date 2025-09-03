import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePage = () => {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [tempNickname, setTempNickname] = useState("");
  const [tempAvatar, setTempAvatar] = useState(null);

  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    const storedAvatar = localStorage.getItem("avatar");
    if (storedNickname) {
      setNickname(storedNickname);
      setTempNickname(storedNickname);
    }
    if (storedAvatar) {
      setAvatar(storedAvatar);
      setTempAvatar(storedAvatar);
    }
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setTempAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setNickname(tempNickname);
    setAvatar(tempAvatar);
    localStorage.setItem("nickname", tempNickname);
    localStorage.setItem("avatar", tempAvatar);

    toast.success("Changes saved!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-40 p-12 text-center bg-[#111] rounded-2xl shadow-lg border border-gray-800">
      <h1 className="text-2xl font-bold text-white mb-6">Profile</h1>

      <div className="mb-6">
        <img
          src={tempAvatar || "https://via.placeholder.com/150"}
          alt="avatar"
          className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-lime-400 shadow-md"
        />
        <div className="mt-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 
                       file:rounded-full file:border-0 file:text-sm file:font-semibold
                       file:bg-lime-400 file:text-black hover:file:bg-lime-300"
          />
        </div>
      </div>

      <div className="mb-6">
        <input
          type="text"
          value={tempNickname}
          onChange={(e) => setTempNickname(e.target.value)}
          placeholder="Type your nickname"
          className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white 
                     focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
      </div>

      <button
        onClick={handleSave}
        className="px-6 py-2 rounded-full bg-lime-400 text-black font-medium hover:bg-lime-300 
                   transition shadow-md"
      >
        Save
      </button>
      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
