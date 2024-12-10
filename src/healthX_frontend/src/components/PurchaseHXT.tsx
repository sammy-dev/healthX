import React, { useState } from "react";

interface PurchaseHXTProps {
  onClose: () => void;
}

const PurchaseHXTTokenPopup: React.FC<PurchaseHXTProps> = ({ onClose }) => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handlePurchase = () => {
    // Implement your purchase logic here
    console.log(`Purchasing ${amount} $HXT`);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="bg-[#041c32] p-8 rounded-lg z-10 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-center text-gray-300 font-rem">
          Purchase $HXT
        </h2>
        <div className="flex flex-col items-center mb-4">
          <label
            htmlFor="amount"
            className="block mb-2 font-bold text-gray-300 font-rem"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="w-full px-4 font-rem py-2 border border-gray-300 rounded bg-gray-800 text-gray-300 focus:outline-none focus:border-[#ffd543] transition-all duration-300"
            placeholder="Enter amount"
          />
        </div>
        <div className="flex justify-center mb-4">
          <button
            className="px-4 py-2 font-rem bg-[#ffd543] text-[#041c32] border-2 border-[#ffd543] rounded-lg"
            onClick={handlePurchase}
            disabled={!amount}
          >
            Purchase $HXT
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="mt-4 px-4 py-2 bg-gray-200 rounded font-rem"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHXTTokenPopup;
