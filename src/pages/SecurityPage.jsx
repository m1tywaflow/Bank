import React from "react";
import WelcomeSec from "../components/SecurityP/WelcomeSec";
import HowWeProtect from "../components/SecurityP/HowWeProtect";
import FAQ from "../components/HomeP/FAQ";
const SecurityPage = () => {
  return (
    <div>
      <WelcomeSec />
      <HowWeProtect />
      <FAQ />
    </div>
  );
};
export default SecurityPage;
