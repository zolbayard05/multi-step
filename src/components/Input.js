let Input = ({ label, placeholder, type, name, value, handleInputValue, error }) => {
  const handleInputChange = (e) => {
    handleInputValue(e.target.value, name);
  };
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] font-semibold text-[#334155]">
        {label} <span className="text-[#E14942]">*</span>
      </label>

      <input
        style={error ? { border: "1px solid #e14942" } : null}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={handleInputChange}
        className="h-[44px] rounded-lg border border-[#D1D5DB] px-4 text-black outline-none focus:border-[#0BA5EC]"
      />
      <p className="text-[#e14942]">{error}</p>
    </div>
  );
};
export default Input;
