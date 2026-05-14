"use client";
import Image from "next/image";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import FinelStep from "@/components/FinelStep";
import { useState } from "react";

let Home = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepComponents = [StepOne, StepTwo, StepThree, FinelStep][currentStep];
  const handleOnClick = () => setCurrentStep(currentStep + 1);

  return (
    <div className="h-screen bg-[#F4F4F5] flex items-center justify-center">
      <div className="w-[480px] h-[655px] bg-white rounded-lg p-8 flex flex-col justify-between shadow-sm">
        {/* Top Section */}
        <div>
          <div className="flex flex-col gap-2">
            <Image src="/Main 1.svg" alt="logo" width={60} height={60} />

            <h1 className="text-[26px] font-semibold text-black leading-none">
              Join Us! 😎🥷🏻🇲🇳
            </h1>

            <p className="text-[#8E8E8E] text-[18px]">
              Please provide all current information accurately.
            </p>
            <StepComponents />
          </div>

          {/* Form */}
        </div>

        {/* Button */}
        <button
          onClick={handleOnClick}
          className="w-full h-[44px] bg-black text-white text-[18px] rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer"
          type="butten"
        >
          Continue 1/3
          <Image src="/chevron_right.svg" alt="right" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};
export default Home;
