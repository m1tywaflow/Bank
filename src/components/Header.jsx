import React from "react";
import logo from "../assets/somethings/logo.png";
export default function Header() {
  return (
    <header className="w-full flex justify-center mt-6">
      <div className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-3 bg-[#111] rounded-full border border-gray-800 shadow-lg">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" />
          <span className="text-white font-semibold">YourBanK</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="text-white hover:text-lime-400">
            Home
          </a>
          <a href="#careers" className="text-white hover:text-lime-400">
            Careers
          </a>
          <a href="#about" className="text-white hover:text-lime-400">
            About
          </a>
          <a href="#security" className="text-white hover:text-lime-400">
            Security
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-white text-sm hover:text-lime-400">
            Sign Up
          </button>
          <button className="px-4 py-1.5 rounded-full bg-lime-400 text-black font-medium text-sm hover:bg-lime-300 transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
