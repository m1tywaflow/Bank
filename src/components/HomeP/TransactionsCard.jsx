import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownUp } from "lucide-react";

const transactions = [
  { name: "Joel Kenley", amount: "-$68.00" },
  { name: "Mark Smith", amount: "-$120.50" },
  { name: "Lenen Roy", amount: "-$42.20" },
  { name: "Roy Purdy", amount: "-$1104.30" },
  { name: "Johnathan Berdy", amount: "-$670" },
  { name: "Alice Fromil", amount: "-$227.68" },
];

export default function TransactionsCard() {
  const [history, setHistory] = useState([transactions[0]]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setHistory((prev) => {
        const nextTx = transactions[index % transactions.length];
        return [nextTx, ...prev].slice(0, 3);
      });
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="bg-[#1a1a1a] p-6 rounded-2xl w-[350px] shadow-lg">
      <h2 className="text-white text-lg font-semibold mb-4">
        Your Transactions
      </h2>
      <div className="relative h-[180px] flex flex-col justify-start space-y-2 overflow-hidden">
        <AnimatePresence>
          {history.map((tx, i) => (
            <motion.div
              key={tx.name + i + index}
              layout="position"
              initial={{ y: -40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: i === 0 ? 1 : 0.5,
              }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl ${
                i === 0 ? "bg-[#262626]" : "bg-[#1f1f1f]"
              }`}
            >
              <div className="flex items-center space-x-2">
                <ArrowDownUp
                  className={`w-5 h-5 ${
                    i === 0 ? "text-[#CAFF33]" : "text-gray-500"
                  }`}
                />
                <p className={i === 0 ? "text-white" : "text-gray-400"}>
                  Transaction {tx.name}
                </p>
              </div>
              <p
                className={
                  i === 0 ? "text-white font-semibold" : "text-gray-400"
                }
              >
                {tx.amount}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
