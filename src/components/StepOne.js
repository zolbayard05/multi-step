import Input from "./Input";

let StepOne = ({ handleInputValue }) => {
  return (
    <div className="mt-8 flex flex-col gap-3">
      <Input
        label="First name"
        placeholder="Your first name"
        handleInputValue={handleInputValue}
        error={true}
        message={"Please enter your first name."}
      />
      <Input
        label="Last name"
        placeholder="Your last name"
        handleInputValue={handleInputValue}
        message={"Please enter your last name."}
      />
      <Input
        label="Username"
        placeholder="Your username"
        handleInputValue={handleInputValue}
        message={"Please enter your username."}
      />
    </div>
  );
};
export default StepOne;
