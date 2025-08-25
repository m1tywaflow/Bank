import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/somethings/logo.png"; // заменишь на свой путь к лого

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-10">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Лого */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="YourBank" className="h-10 mb-2" />
          <h2 className="text-lg font-semibold">YourBanK</h2>
        </div>

        {/* Навигация */}
        <nav className="flex space-x-8 text-sm">
          <a href="#" className="hover:text-[#CAFF33] transition">
            Home
          </a>
          <a href="#" className="hover:text-[#CAFF33] transition">
            Careers
          </a>
          <a href="#" className="hover:text-[#CAFF33] transition">
            About
          </a>
          <a href="#" className="hover:text-[#CAFF33] transition">
            Security
          </a>
        </nav>

        <hr className="w-full border-[#262626]" />

        {/* Контакты */}
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-[#CAFF33]" />
            <span>hello@skillbridge.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-[#CAFF33]" />
            <span>+91 91813 23 2309</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[#CAFF33]" />
            <span>Somewhere in the World</span>
          </div>
        </div>

        <hr className="w-full border-[#262626]" />

        {/* Соцсети + копирайт */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Соцсети */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#CAFF33] text-black"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#CAFF33] text-black"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#CAFF33] text-black"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Копирайт + ссылки */}
          <div className="flex flex-col md:flex-row items-center gap-4 bg-[#111111] px-6 py-3 rounded-full text-sm text-gray-400">
            <p>YourBank All Rights Reserved</p>
            <div className="flex space-x-4 text-white">
              <a href="#" className="hover:text-[#CAFF33] transition">
                Privacy Policy
              </a>
              <span className="text-[#262626]">|</span>
              <a href="#" className="hover:text-[#CAFF33] transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
