import Input from "./Input";

let StepOne = ({ handleInputValue }) => {
  return (
    <div className="mt-8 flex flex-col gap-3">
      <Input
        label="First name"
        placeholder="Your first name"
        handleInputValue={handleInputValue}
      />
      <Input
        label="Last name"
        placeholder="Your last name"
        handleInputValue={handleInputValue}
      />
      <Input
        label="Username"
        placeholder="Your username"
        handleInputValue={handleInputValue}
      />
    </div>
  );
};
export default StepOne;
