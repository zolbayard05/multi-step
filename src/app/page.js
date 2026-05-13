"use client";
import Image from "next/image";
import SecondHome from "@/components/Page2";
import ThirdHome from "@/components/Page3";
import Input from "@/components/Input";
import { useState } from "react";

let Home = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F5] flex items-center justify-center">
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
          </div>

          {/* Form */}
          <div className="mt-8 flex flex-col gap-3">
            <Input label="First name" placeholder="Your first name" />
            <Input label="Last name" placeholder="Your last name" />
            <Input label="Username" placeholder="Your username" />
          </div>
        </div>

        {/* Button */}
        <button className="w-full h-[44px] bg-black text-white text-[18px] rounded-lg font-medium flex items-center justify-center gap-2">
          Continue 1/3
          <Image src="/chevron_right.svg" alt="right" width={24} height={24} />
        </button>
      </div>
      <SecondHome />
      <ThirdHome />
    </div>
  );
};
export default Home;
