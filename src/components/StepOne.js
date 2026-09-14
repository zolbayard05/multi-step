import Input from "./Input";

let StepOne = ({ handleInputValue, data, error }) => {
  return (
    <div className="mt-8 flex flex-col gap-3">
      <Input
        label="First name"
        placeholder="Your first name"
        name="Firstname"
        value={data?.Firstname}
        handleInputValue={handleInputValue}
        error={error?.Firstname}
      />
      <Input
        label="Last name"
        placeholder="Your last name"
        name="Lastname"
        value={data?.Lastname}
        handleInputValue={handleInputValue}
        error={error?.Lastname}
      />
      <Input
        label="Username"
        placeholder="Your username"
        name="Username"
        value={data?.Username}
        handleInputValue={handleInputValue}
        error={error?.Username}
      />
    </div>
  );
};
export default StepOne;
