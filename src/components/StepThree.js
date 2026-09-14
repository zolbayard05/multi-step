import Image from "next/image";
import Input from "@/components/Input";

const StepThree = ({ handleInputValue, data, error }) => {
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      handleInputValue(reader.result, "image");
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    handleInputValue("", "image");
  };

  return (
    <div>
      <div className="mt-8 flex flex-col gap-3">
        <Input
          label="Date of birth"
          placeholder="--/--/--"
          type="date"
          name="date"
          value={data?.date}
          handleInputValue={handleInputValue}
          error={error?.date}
        />
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-semibold text-[#334155]">
            Profile image <span className="text-[#E14942]">*</span>
          </label>
          {data?.image ? (
            <div className="relative h-[180px] w-full rounded-lg border border-[#D1D5DB] overflow-hidden">
              <img
                src={data.image}
                alt="Profile preview"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 h-6 w-6 rounded-full bg-white text-[#E14942] shadow flex items-center justify-center cursor-pointer"
              >
                ×
              </button>
            </div>
          ) : (
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
                accept="image/*"
                placeholder="Your profile image"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          )}
          {error?.image && <p className="text-[#e14942]">{error.image}</p>}
        </div>
      </div>
    </div>
  );
};
export default StepThree;
