import Image from "next/image";
import Input from "@/components/Input";

let StepTwo = () => {
  return (
    <div>
      <div>
        <div className="mt-8 flex flex-col gap-3">
          <Input label="Email" placeholder="Your email" type="email" />
          <Input label="Phone number" placeholder="Your phone number" />
          <Input label="Password" placeholder="Your password" type="password" />
          <Input
            label="Confirm password "
            placeholder="Confirm password"
            type="password"
          />
        </div>
      </div>
    </div>
  );
};
export default StepTwo;
