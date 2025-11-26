import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import CommonInput from "../../components/CommonInput";
import CommonButton from "../../components/CommonButton";

import { RegisterSchema } from "./schema/register.schema";
import type { RegisterFormType } from "./schema/register.schema";
import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../../api/auth.api";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
  });

  const registerMutation = useMutation({
    mutationFn: registerApi,
    onSuccess: () => {
      toast.success("🎉 Registered Successfully!");
      setTimeout(() => navigate("/login"), 1500); // Smooth redirect
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Registration Failed ❌");
    },
  });

  const onSubmit = (data: RegisterFormType) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("mobile", data.mobile);
    formData.append("age", data.age);

    if (data.image?.[0]) {
      formData.append("image", data.image[0]);
    }

    registerMutation.mutate(formData);
  };

  return (
    <div className="flex flex-wrap w-full min-h-screen">
      <div className="flex flex-1 min-h-[300px] justify-center items-center hidden xs:flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
          className="w-2/5 max-w-[500px] object-cover animate-bounce"
        />
      </div>

      <div className="flex flex-1 justify-center items-center p-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md"
        >
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
            Create Your Account
          </h2>

<div className="flex gap-4 w-full">
  <div className="flex-1">
    <CommonInput
      label="First Name"
      placeholder="John"
      required
      {...register("firstName")}
      error={errors.firstName?.message}
    />
  </div>

  <div className="flex-1">
    <CommonInput
      label="Last Name"
      placeholder="Cena"
      required
      {...register("lastName")}
      error={errors.lastName?.message}
    />
  </div>
  
</div>

          <CommonInput
            label="Age"
            placeholder="23"
            type="number"
            required
            {...register("age")}
            error={errors.age?.message}
          />

          <CommonInput
            label="Email"
            placeholder="you@example.com"
            type="email"
            required
            {...register("email")}
            error={errors.email?.message}
          />

          <CommonInput
            label="Mobile"
            placeholder="9876543210"
            type="tel"
            required
            {...register("mobile")}
            error={errors.mobile?.message}
          />

          <CommonInput
            label="Password"
            type="password"
            placeholder="••••••••"
            required
            {...register("password")}
            error={errors.password?.message}
          />

          <CommonInput
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            required
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />

          {/* File Upload */}
          <div className="mb-5">
            <label className="block mb-1 text-gray-600 font-medium">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              className="w-full text-gray-600"
            />
            {typeof errors.image?.message === "string" && (<p className="text-red-500 text-sm">{errors.image.message}</p>)}
          </div>

          {/* Disable button when API loading */}
          <CommonButton
            title={registerMutation.isPending ? "Processing..." : "Sign Up"}
            type="submit"
            disabled={registerMutation.isPending}
          />

          <p
            onClick={() => navigate("/login")}
            className="text-center text-sm text-gray-600 mt-6 cursor-pointer"
          >
            Already have an account?
            <span className="text-green-600 font-semibold"> Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}
