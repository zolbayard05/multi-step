let Input = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] font-semibold text-[#334155]">
        {label} <span className="text-[#E14942]">*</span>
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="h-[44px] rounded-lg border border-[#D1D5DB] px-4 text-black outline-none focus:border-[#0BA5EC]"
      />
    </div>
  );
};
export default Input;
