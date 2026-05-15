let Input = ({
  label,
  placeholder,
  type,
  handleInputValue,
  message,
  error,
}) => {
  const handleInputChange = (e) => {
    handleInputValue(e.target.value, placeholder);
  };
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] font-semibold text-[#334155]">
        {label} <span className="text-[#E14942]">*</span>
      </label>

      <input
        style={error === true ? { border: "1px solid #e14942" } : null}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="h-[44px] rounded-lg border border-[#D1D5DB] px-4 text-black outline-none focus:border-[#0BA5EC]"
      />
      <p className="text-[#e14942]">{message}</p>
    </div>
  );
};
export default Input;
