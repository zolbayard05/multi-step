import Image from "next/image";
import Input from "@/components/Input";

let SecondHome = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F5] flex items-center justify-center">
      <div className="w-[480px] h-[655px] bg-white rounded-lg p-8 flex flex-col justify-between shadow-sm">
        {/* Top */}
        <div>
          <div className="flex flex-col gap-2">
            <Image src="/Main 1.svg" alt="logo" width={60} height={60} />

            <h1 className="text-[26px] font-semibold text-black leading-none">
              Join Us! 😎
            </h1>

            <p className="text-[18px] text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Input label="First name" placeholder="Your email" />
            <Input label="Last name" placeholder="Your phone number" />
            <Input label="Username" placeholder="Your password" />
            <Input label="Email" placeholder="Confirm password" />
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-3">
          {/* Back */}
          <button className="w-[128px] h-[44px] border border-[#D0D5DD] rounded-lg flex items-center justify-center gap-2 text-[18px] text-[#344054]">
            <Image src="/chevron_left.svg" alt="right" width={24} height={24} />
            Back
          </button>

          {/* Continue */}
          <button className="flex-1 h-[44px] bg-[#12131A] rounded-lg text-white text-[18px] flex items-center justify-center gap-2">
            Continue 2/3
            <Image
              src="/chevron_right.svg"
              alt="right"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SecondHome;
