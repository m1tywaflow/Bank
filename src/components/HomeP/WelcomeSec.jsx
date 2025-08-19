// import React from "react";
// import { BadgeCheck } from "lucide-react";
// export default function WelcomeSec() {
//   return (
//     <div>
//       <div>
//         <div className="p-30 max-w-190">
//           <div className="bg-[#262626] rounded-3xl w-fit px-4 py-3 flex items-center space-x-2">
//             <BadgeCheck className="text-[#CAFF33] w-5 h-5" />
//             <p className="text-white">No LLC Required, No Credit Check.</p>
//           </div>

//           <h1 className="text-white text-4xl py-4">
//             Welcome to YourBank Empowering Your{" "}
//             <span className="text-[#CAFF33] font-bold">Financial Journey</span>
//           </h1>
//           <p className="text-[#E4E4E7] py-4">
//             At YourBank, our mission is to provide comprehensive banking
//             solutions that empower individuals and businesses to achieve their
//             financial goals. We are committed to delivering personalized and
//             innovative services that prioritize our customers' needs.
//           </p>
//           <button className="bg-[#CAFF33] rounded-2xl py-4 px-6 w-fit flex items-center justify-center cursor-pointer hover:bg-[#405507] transition duration-200 ">
//             Open Account
//           </button>
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { BadgeCheck } from "lucide-react";
import TransactionsCard from "../HomeP/TransactionsCard";

export default function WelcomeSec() {
  return (
    <section className="bg-[#1a1a1a] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="bg-[#262626] rounded-full w-fit px-4 py-2 flex items-center space-x-2 mb-6">
            <BadgeCheck className="text-[#CAFF33] w-5 h-5" />
            <p className="text-white text-sm">
              No LLC Required, No Credit Check.
            </p>
          </div>
          <h1 className="text-white text-5xl font-bold leading-tight mb-6">
            Welcome to YourBank <br />
            Empowering Your{" "}
            <span className="text-[#CAFF33]">Financial Journey</span>
          </h1>
          <p className="text-[#E4E4E7] text-lg mb-8">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers&apos; needs.
          </p>
          <button className="bg-[#CAFF33] rounded-full py-4 px-8 text-black font-medium w-fit flex items-center justify-center cursor-pointer hover:bg-[#405507] transition duration-200">
            Open Account
          </button>
        </div>

        {/* ==== Правый блок (для картинки/баннера) ==== */}
        <div className="flex justify-center md:justify-end">
          <div className="w-80 h-80 bg-[#262626] rounded-3xl">
            {" "}
            <TransactionsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
