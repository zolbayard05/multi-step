import Image from "next/image";
import Input from "@/components/Input";

let StepTwo = ({ handleInputValue }) => {
  return (
    <div>
      <div>
        <div className="mt-8 flex flex-col gap-3">
          <Input
            label="Email"
            placeholder="Your email"
            type="email"
            handleInputValue={handleInputValue}
          />
          <Input
            label="Phone number"
            placeholder="Your phone number"
            handleInputValue={handleInputValue}
          />
          <Input
            label="Password"
            placeholder="Your password"
            type="password"
            handleInputValue={handleInputValue}
          />
          <Input
            label="Confirm password "
            placeholder="Confirm password"
            type="password"
            handleInputValue={handleInputValue}
          />
        </div>
      </div>
    </div>
  );
};
export default StepTwo;
