import Image from "next/image";

let FinelStep = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F5] flex justify-center pt-64.5">
      <div className="w-[480px] h-[195px] bg-white rounded-lg p-8 flex flex-col shadow-sm gap-2">
        <Image src="/Main 1.svg" alt="logo" width={60} height={60} />
        <h1 className="text-[26px] font-semibold text-black leading-none">
          You're all set 🔥🔥🔥
        </h1>

        <p className="text-[#8E8E8E] text-[18px]">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
export default FinelStep;
