import React from "react";
import WelcomeSec from "../components/HomeP/WelcomeSec";
import OurProducts from "../components/HomeP/OurProducts";
import UseCases from "../components/HomeP/UseCases";
import OurFeatures from "../components/HomeP/OurFeatures";
import FAQ from "../components/HomeP/FAQ";
const HomePage = () => {
  return (
    <div>
      <WelcomeSec />
      <OurProducts />
      <UseCases />
      <OurFeatures />
      <FAQ />
    </div>
  );
};
export default HomePage;
