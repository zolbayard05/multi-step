import Input from "@/components/Input";

let StepTwo = ({ handleInputValue, data, error }) => {
  return (
    <div>
      <div>
        <div className="mt-8 flex flex-col gap-3">
          <Input
            label="Email"
            placeholder="Your email"
            type="email"
            name="email"
            value={data?.email}
            handleInputValue={handleInputValue}
            error={error?.email}
          />
          <Input
            label="Phone number"
            placeholder="Your phone number"
            name="phoneNumber"
            value={data?.phoneNumber}
            handleInputValue={handleInputValue}
            error={error?.phoneNumber}
          />
          <Input
            label="Password"
            placeholder="Your password"
            type="password"
            name="password"
            value={data?.password}
            handleInputValue={handleInputValue}
            error={error?.password}
          />
          <Input
            label="Confirm password "
            placeholder="Confirm password"
            type="password"
            name="confirmPassword"
            value={data?.confirmPassword}
            handleInputValue={handleInputValue}
            error={error?.confirmPassword}
          />
        </div>
      </div>
    </div>
  );
};
export default StepTwo;
