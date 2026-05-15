"use client";
import * as z from "zod";
import Image from "next/image";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import FinelStep from "@/components/FinelStep";
import { useState } from "react";

let Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});

  const dataSchema = z.object({
    Firstname: z.string().min(2, { error: "Too short" }).max(20),
    Lastname: z.string().min(2, { error: "Too short" }).max(20),
    Username: z.string().min(2, { error: "Too short" }).max(20),
    phoneNumber: z
      .number()
      .min(8, { error: "Must be 8 digits" })
      .max(8, { error: "Must be 8 digits" }),
    emial: z
      .string()
      .regex("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"),
    password: z.string(),
    confirmPassword: z.string(),
    date: z.iso.date(),
    image: z.string(),
  });

  const StepComponents = [StepOne, StepTwo, StepThree, FinelStep][currentStep];

  const handleOnClick = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleOnBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputValue = (inputValue, key) => {
    setData({ ...data, [key]: inputValue });
  };

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
            {currentStep < 3 && (
              <p className="text-[#8E8E8E] text-[18px]">
                Please provide all current information accurately.
              </p>
            )}
            <StepComponents handleInputValue={handleInputValue} />
          </div>
        </div>

        {/* Button */}
        {currentStep < 3 && (
          <div className="flex gap-2 ">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handleOnBack}
                className=" rounded-md bg-white text-[#202124] border border-[#CBD5E1] w-45 flex items-center justify-center gap-2 text-[18px] font-medium cursor-pointer"
              >
                <Image
                  src="/chevron_left.svg"
                  alt="left"
                  width={24}
                  height={24}
                />
                Back
              </button>
            )}
            <button
              onClick={handleOnClick}
              className="w-full h-[44px] bg-black text-white text-[18px] rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer"
              type="butten"
            >
              Continue {currentStep + 1}/3
              <Image
                src="/chevron_right.svg"
                alt="right"
                width={24}
                height={24}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
