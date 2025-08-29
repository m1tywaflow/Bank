import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-[#1A1A1A] text-center px-6">
      <h1 className="text-6xl font-bold text-[#CAFF33]">404</h1>
      <p className="text-gray-400 mt-4 text-lg">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 rounded-xl bg-[#CAFF33] text-black font-medium hover:bg-[#b3e62d] transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
