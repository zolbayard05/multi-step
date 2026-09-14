"use client";
import * as z from "zod";
import Image from "next/image";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import FinelStep from "@/components/FinelStep";
import { useEffect, useState } from "react";

const STORAGE_KEY = "multiStepFormData";

let Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage on mount
      if (saved) setData(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }, [data]);

  const stepOneSchema = z.object({
    Firstname: z
      .string({ error: "Нэрээ оруулна уу." })
      .min(2, { error: "Хэт богино байна." })
      .max(20, { error: "Хэт урт байна." }),
    Lastname: z
      .string({ error: "Овгоо оруулна уу." })
      .min(2, { error: "Хэт богино байна." })
      .max(20, { error: "Хэт урт байна." }),
    Username: z
      .string({ error: "Хэрэглэгчийн нэрээ оруулна уу." })
      .min(2, { error: "Хэт богино байна." })
      .max(20, { error: "Хэт урт байна." }),
  });

  const stepTwoSchema = z
    .object({
      phoneNumber: z
        .string({ error: "Утасны дугаараа оруулна уу." })
        .regex(/^\+?\d{8}$/, { error: "Утасны дугаар 8 оронтой байх ёстой." }),
      email: z
        .string({ error: "Имэйл хаягаа оруулна уу." })
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { error: "Имэйл хаяг буруу байна." }),
      password: z
        .string({ error: "Нууц үгээ оруулна уу." })
        .min(6, { error: "Нууц үг хамгийн багадаа 6 тэмдэгттэй байх ёстой." }),
      confirmPassword: z
        .string({ error: "Нууц үгээ давтан оруулна уу." })
        .min(1, { error: "Нууц үгээ давтан оруулна уу." }),
    })
    .refine((val) => val.password === val.confirmPassword, {
      error: "Нууц үг таарахгүй байна.",
      path: ["confirmPassword"],
    });

  const stepThreeSchema = z.object({
    date: z.iso.date({ error: "Төрсөн огноогоо оруулна уу." }),
    image: z
      .string({ error: "Профайл зургаа оруулна уу." })
      .min(1, { error: "Профайл зургаа оруулна уу." }),
  });

  const StepComponents = [StepOne, StepTwo, StepThree, FinelStep][currentStep];

  const handleOnClickNext = () => {
    let schema;
    if (currentStep === 0) {
      schema = stepOneSchema;
    } else if (currentStep === 1) {
      schema = stepTwoSchema;
    } else {
      schema = stepThreeSchema;
    }

    const result = schema.safeParse(data);
    if (result.success) {
      setError({});
      if (currentStep === 2) {
        console.log("Form submitted:", data);
        setData({});
      }
      setCurrentStep(currentStep + 1);
    } else {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0];
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setError(fieldErrors);
    }
  };
  const handleOnClickBack = () => {
    setError({});
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

            {currentStep < 3 && (
              <div className="flex gap-1">
                {[0, 1, 2].map((step) => (
                  <div
                    key={step}
                    className={`h-1 flex-1 rounded-full ${
                      step <= currentStep ? "bg-black" : "bg-[#E5E7EB]"
                    }`}
                  />
                ))}
              </div>
            )}

            <h1 className="text-[26px] font-semibold text-black leading-none">
              Join Us! 😎🥷🏻🇲🇳
            </h1>
            {currentStep < 3 && (
              <p className="text-[#8E8E8E] text-[18px]">
                Please provide all current information accurately.
              </p>
            )}
            <StepComponents
              handleInputValue={handleInputValue}
              data={data}
              error={error}
            />
          </div>
        </div>

        {/* Button */}

        {currentStep < 3 && (
          <div className="flex gap-2 ">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handleOnClickBack}
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
              onClick={handleOnClickNext}
              className="w-full h-[44px] bg-black text-white text-[18px] rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer"
              type="button"
            >
              {currentStep === 2 ? "Submit" : `Continue ${currentStep + 1}/3`}
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
