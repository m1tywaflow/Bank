import React from "react";
import logo from "../assets/somethings/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50">
      <div className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-3 mt-4 bg-[#111] rounded-full border border-gray-800 shadow-lg">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-white font-semibold">YourBanK</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/" className="text-white hover:text-lime-400">
            Home
          </Link>
          <Link to="/careers" className="text-white hover:text-lime-400">
            Careers
          </Link>
          <Link to="/about" className="text-white hover:text-lime-400">
            About
          </Link>
          <Link to="/security" className="text-white hover:text-lime-400">
            Security
          </Link>
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
