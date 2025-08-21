// import React from "react";
// import subContImg from "../../assets/somethings/SubCont.png";
// import managingIcon from "../../assets/UseCases/managingIcon.png";
// import savingIcon from "../../assets/UseCases/savingIcon.png";
// import homeownerIcon from "../../assets/UseCases/homeownerIcon.png";
// import educationIcon from "../../assets/UseCases/educationIcon.png";
// export default function UseCases() {
//   return (
//     <div className="px-6 max-w-7xl mx-auto py-20">
//       <div className="items-center">
//         <h1 className="text-[#CAFF33] text-4xl font-bold">Use Cases</h1>
//         <p className="text-[#B3B3B3] py-4">
//           At YourBank, we cater to the diverse needs of individuals and
//           businesses alike, offering a wide range of financial solutions
//         </p>
//       </div>
//       <div
//         className="p-10 rounded-2xl bg-cover bg-center"
//         style={{ backgroundImage: `url(${subContImg})` }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
//             <img src={managingIcon} alt="icon" className="mb-4" />
//             <h1 className="text-white">Managing Personal Finances</h1>
//           </div>

//           <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
//             <img src={savingIcon} alt="icon" className="mb-4" />
//             <h1 className="text-white">Saving for the Future</h1>
//           </div>

//           <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
//             <img src={homeownerIcon} alt="icon" className="mb-4" />
//             <h1 className="text-white">Homeownership</h1>
//           </div>

//           <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
//             <img src={educationIcon} alt="icon" className="mb-4" />
//             <h1 className="text-white">Education Funding</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import subContImg from "../../assets/somethings/SubCont.png";
import managingIcon from "../../assets/UseCases/managingIcon.png";
import savingIcon from "../../assets/UseCases/savingIcon.png";
import homeownerIcon from "../../assets/UseCases/homeownerIcon.png";
import educationIcon from "../../assets/UseCases/educationIcon.png";

export default function UseCases() {
  return (
    <div className="px-6 max-w-7xl mx-auto py-20">
      {/* Заголовок */}
      <div className="items-center mb-10">
        <h1 className="text-[#CAFF33] text-4xl font-bold">Use Cases</h1>
        <p className="text-[#B3B3B3] py-4 max-w-2xl">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </p>
      </div>

      {/* Основной блок: сетка 2 колонки */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Левая часть с карточками */}
        <div
          className="p-10 rounded-2xl bg-cover "
          style={{ backgroundImage: `url(${subContImg})` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
              <img src={managingIcon} alt="icon" className="mb-4" />
              <h1 className="text-white">Managing Personal Finances</h1>
            </div>

            <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
              <img src={savingIcon} alt="icon" className="mb-4" />
              <h1 className="text-white">Saving for the Future</h1>
            </div>

            <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
              <img src={homeownerIcon} alt="icon" className="mb-4" />
              <h1 className="text-white">Homeownership</h1>
            </div>

            <div className="bg-black/50 rounded-xl p-6 flex flex-col items-center text-center">
              <img src={educationIcon} alt="icon" className="mb-4" />
              <h1 className="text-white">Education Funding</h1>
            </div>
          </div>
        </div>

        {/* Правая часть с текстом */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            For Individuals
          </h2>
          <p className="text-[#B3B3B3] mb-8">
            For individuals, our mortgage services pave the way to
            homeownership, and our flexible personal loans provide vital support
            during various life milestones. We also prioritize retirement
            planning, ensuring a financially secure future for our customers
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div className="flex-1 text-center sm:text-left sm:pr-6 sm:border-r sm:border-[#333]">
              <h3 className="text-[#CAFF33] text-3xl font-bold">78%</h3>
              <p className="text-[#B3B3B3] text-sm">
                Secure Retirement Planning
              </p>
            </div>

            <div className="flex-1 text-center sm:text-left sm:px-6 sm:border-r sm:border-[#333]">
              <h3 className="text-[#CAFF33] text-3xl font-bold">63%</h3>
              <p className="text-[#B3B3B3] text-sm">
                Manageable Debt Consolidation
              </p>
            </div>

            <div className="flex-1 text-center sm:text-left sm:pl-6">
              <h3 className="text-[#CAFF33] text-3xl font-bold">91%</h3>
              <p className="text-[#B3B3B3] text-sm">
                Reducing financial burdens
              </p>
            </div>
          </div>

          <button className="bg-black px-6 py-2 rounded-full text-white hover:bg-[#2A2A2A] duration-200 transition cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
