import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Checkbox, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import { RegistrationFormData, registrationSchema } from "./registrationSchema";

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = (data: RegistrationFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border rounded-md flex justify-center"
    >
      <Card className=" md:w-1/2 w-full p-2">
        <div className="flex flex-col  ">
          <div className="mb-4">
            <Input
              label="Name"
              placeholder="Enter your name"
              {...register("name")}
              className=" p-2 w-full"
              variant="bordered"
              isInvalid={errors.name ? true : false}
              errorMessage={errors.name?.message}
              size="lg"
              classNames={{
                input: "text-[1.2rem]",
              }}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Email"
              placeholder="Enter your email"
              {...register("email")}
              className=" p-2 w-full"
              variant="bordered"
              isInvalid={errors.email ? true : false}
              errorMessage={errors.email?.message}
              size="lg"
              classNames={{
                input: "text-[1.2rem]",
              }}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Password"
              placeholder="Enter your password"
              {...register("password")}
              className=" p-2 w-full"
              variant="bordered"
              isInvalid={errors.password ? true : false}
              errorMessage={errors.password?.message}
              size="lg"
              classNames={{
                input: "text-[1.2rem]",
              }}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              {...register("confirmPassword")}
              className=" p-2 w-full"
              variant="bordered"
              isInvalid={errors.confirmPassword ? true : false}
              errorMessage={errors.confirmPassword?.message}
              size="lg"
              classNames={{
                input: "text-[1.2rem]",
              }}
            />
          </div>

          <div className="mb-4">
            <Checkbox
              {...register("terms")}
              isInvalid={errors.terms ? true : false}
               
            >
              I agree to the terms and conditions
            </Checkbox>
          </div>

          <Button type="submit" color="primary" fullWidth>
            Register
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default RegistrationForm;
