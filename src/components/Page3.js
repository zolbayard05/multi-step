import Image from "next/image";

const ThirdHome = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F5] flex items-center justify-center">
      <div className="w-[480px] h-[655px] bg-white rounded-lg p-8 flex flex-col justify-between shadow-sm">
        {/* Top Section */}
        <div>
          {/* Header */}
          <div className="flex flex-col gap-2">
            <Image src="/Main 1.svg" alt="logo" width={60} height={60} />

            <h1 className="text-[26px] font-semibold leading-none text-black">
              Join Us! 😎
            </h1>

            <p className="text-[18px] text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>

          {/* Form */}
          <div className="mt-8 flex flex-col gap-3">
            {/* Date */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-[#334155]">
                Date of birth <span className="text-red-500">*</span>
              </label>

              <div className="h-[44px] border border-[#D0D5DD] rounded-lg px-4 flex items-center justify-between">
                <input
                  type="text"
                  placeholder="--/--/--"
                  className="outline-none text-[18px] text-black placeholder:text-[#98A2B3] w-full"
                />

                <Image
                  src="/calendar.svg"
                  alt="calendar"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            {/* Upload */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-[#334155]">
                Profile image <span className="text-red-500">*</span>
              </label>

              <label className="w-full h-[180px] bg-[#F9FAFB] rounded-lg flex flex-col items-center justify-center cursor-pointer border border-transparent hover:border-[#D0D5DD] transition">
                <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Image src="/image.svg" alt="upload" width={20} height={20} />
                </div>

                <p className="mt-3 text-[16px] text-black font-medium">
                  Add image
                </p>

                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-3">
          {/* Back */}
          <button className="w-[128px] h-[44px] border border-[#D0D5DD] rounded-lg flex items-center justify-center gap-2 text-[18px] text-[#344054]">
            <Image src="/chevron_left.svg" alt="back" width={24} height={24} />
            Back
          </button>

          {/* Continue */}
          <button className="flex-1 h-[44px] bg-[#12131A] rounded-lg text-white text-[18px] flex items-center justify-center gap-2">
            Continue 3/3
            <Image src="/chevron_right.svg" alt="next" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdHome;
