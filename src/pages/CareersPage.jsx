import React from "react";
import WelcomeSec from "../components/CareersP/WelcomeSec";
import OurValues from "../components/CareersP/OurValues";
import OurBenefits from "../components/CareersP/OurBenefits";
import JobOpenings from "../components/CareersP/JobOpenings";
import FAQ from "../components/HomeP/FAQ";
import CTAsec from "../components/CTAsec";
const CareersPage = () => {
  return (
    <div>
      <WelcomeSec />
      <OurValues />
      <OurBenefits />
      <JobOpenings />
      <FAQ />
      <CTAsec />
    </div>
  );
};
export default CareersPage;
