import Image from "next/image";
import Input from "@/components/Input";

const StepThree = () => {
  return (
    <div>
      <div className="mt-8 flex flex-col gap-3">
        <Input label="Date of birth" placeholder="--/--/--" type="date" />
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-semibold text-[#334155]">
            Profile image <span className="text-[#E14942]">*</span>
          </label>
          <div className="relative h-[180px] w-full rounded-lg bg-[#f3f4f6] border border-[#D1D5DB] px-4 text-black outline-none flex items-center justify-center gap-2 text-[#8E8E8E] text-[14px] cursor-pointer">
            Add image
            <Image
              src="/image.svg"
              alt="image"
              width={12}
              height={12}
              className="text-[#8E8E8E] absolute pb-4 -translate-y-1/2 pointer-events-none flex items-center justify-center gap-2"
            />
            <input
              type="file"
              placeholder="Your profile image"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
