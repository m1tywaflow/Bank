import React from "react";
import logo from "../../assets/somethings/logo.png";
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300">
      <img src={logo} alt="Loading..." className="w-24 h-24 animate-spin" />
    </div>
  );
};

export default Loader;
