// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const VirtualBankCard = ({ card }) => {
//   // card: { brand, last4, holder, expiry, cvv }
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div className="flex justify-center mt-12">
//       <motion.div
//         className="w-80 h-48 perspective"
//         onClick={() => setFlipped(!flipped)}
//       >
//         <motion.div
//           className="relative w-full h-full rounded-2xl shadow-2xl cursor-pointer"
//           animate={{ rotateY: flipped ? 180 : 0 }}
//           transition={{ duration: 0.8 }}
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           {/* Front Side */}
//           <div
//             className="absolute w-full h-full bg-gradient-to-r from-lime-400 to-green-600 text-white rounded-2xl p-6"
//             style={{ backfaceVisibility: "hidden" }}
//           >
//             <div className="flex justify-between items-center mb-8">
//               <span className="text-lg font-bold">YourBanK</span>
//               <span className="text-sm">{card.brand || "VISA"}</span>
//             </div>
//             <div className="text-xl tracking-widest mb-4">
//               **** **** **** {card.last4 || "1234"}
//             </div>
//             <div className="flex justify-between text-sm">
//               <div>
//                 <p>Card Holder</p>
//                 <p className="font-semibold">{card.holder || "John Doe"}</p>
//               </div>
//               <div>
//                 <p>Expires</p>
//                 <p className="font-semibold">{card.expiry || "12/26"}</p>
//               </div>
//             </div>
//           </div>

//           {/* Back Side */}
//           <div
//             className="absolute w-full h-full bg-gray-900 text-white rounded-2xl p-6"
//             style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
//           >
//             <div className="bg-black h-12 mb-6"></div>
//             <div className="flex justify-end items-center h-full">
//               <div className="bg-white text-black px-4 py-2 rounded-md">
//                 CVV: {card.cvv || "123"}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default VirtualBankCard;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/somethings/logo.png";

const generateRandomCard = () => {
  const getRandomNumber = (length) =>
    Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");

  const names = ["Alice Smith", "John Doe", "Bob Johnson", "Eva Green"];
  const brandTypes = ["VISA", "Mastercard", "Amex"];

  return {
    brand: brandTypes[Math.floor(Math.random() * brandTypes.length)],
    last4: getRandomNumber(4),
    holder: names[Math.floor(Math.random() * names.length)],
    expiry: `${Math.floor(Math.random() * 12 + 1)
      .toString()
      .padStart(2, "0")}/${Math.floor(Math.random() * 5 + 24)}`,
    cvv: getRandomNumber(3),
  };
};

const VirtualBankCard = () => {
  const [card, setCard] = useState(generateRandomCard());
  const [flipped, setFlipped] = useState(false);

  const handleRefresh = () => setCard(generateRandomCard());

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        className="w-80 h-48 perspective cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        <motion.div
          className="relative w-full h-full rounded-2xl shadow-2xl"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full bg-gradient-to-r from-lime-400 to-green-600 text-white rounded-2xl p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold flex items-center">
                <img className="h-9 w-9" src={logo} alt="logoBank" />
                <span className="ml-2">YourBanK</span>
              </span>

              <span className="text-sm">{card.brand}</span>
            </div>
            <div className="text-xl tracking-widest mb-4">
              **** **** **** {card.last4}
            </div>
            <div className="flex justify-between text-sm">
              <div>
                <p>Card Holder</p>
                <p className="font-semibold">{card.holder}</p>
              </div>
              <div>
                <p>Expires</p>
                <p className="font-semibold">{card.expiry}</p>
              </div>
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full bg-gray-900 text-white rounded-2xl p-6"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="bg-black h-12 mb-6"></div>
            <div className="flex justify-end items-center h-full">
              <div className="bg-white text-black px-4 py-2 rounded-md">
                CVV: {card.cvv}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <button
        onClick={handleRefresh}
        className="mt-2 px-4 py-2 rounded-full bg-lime-400 text-black font-bold hover:bg-lime-300 transition"
      >
        Generate New Card
      </button>
    </div>
  );
};

export default VirtualBankCard;
