import Input from "./Input";

let StepOne = () => {
  return (
    <div className="mt-8 flex flex-col gap-3">
      <Input label="First name" placeholder="Your first name" />
      <Input label="Last name" placeholder="Your last name" />
      <Input label="Username" placeholder="Your username" />
    </div>
  );
};
export default StepOne;
