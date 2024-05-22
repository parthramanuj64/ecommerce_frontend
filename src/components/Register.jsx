import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { loginImage, registerImage } from "../utils/AppImages";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../services/auth_services";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // Handle Register submission
    const registerData = {
      email: data.email,
      password: data.password,
    };
    const response = await createUser(registerData);
    console.log("response in frint: ", response);
    // if (response.status === 201) {
    //   navigate("/login");
    // }
    reset();
  };

  return (
    <div className="bg-gray-200 h-full w-full">
      <div className="md:grid md:grid-cols-4 h-full md:divide-x-2">
        <div className=" md:col-span-2 flex items-center justify-center ">
          <div className="bg-lightPrimaryColor h-full w-full md:flex flex-col justify-center hidden">
            <img
              src={registerImage}
              alt=""
              srcset=""
              className="w-full h-3/4 "
            />
          </div>
        </div>
        <div className=" col-span-2 text-black text-start p-5 flex flex-col h-full justify-center pl-24 pr-24">
          <div>
            <h1 className="text-2xl font-bold">Adventure starts here 🚀</h1>
            <p className="text-gray-500 text-sm font-semibold">
              Make your app management easy and fun!
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-14">
            <InputField
              label={"Enter email"}
              name={"email"}
              placeholder={"Email"}
              type="email"
              {...register("email", {
                required: { value: true, message: "Email is Required" },
                validate: {
                  matchPatern: (value) =>
                    /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(
                      value
                    ) || "Email address must be a valid address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
            <InputField
              label={"Enter password"}
              name={"password"}
              placeholder={"Password"}
              type="password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
            <InputField
              label={"Enter confirm password"}
              name={"confirmpassword"}
              placeholder={"Confirm Password"}
              type="password"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "confirmPassword is required",
                },
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Your confirmPassword do no match with password";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-primaryColor text-white py-2 px-4 rounded-md focus:outline-none mt-5"
            >
              Register
            </button>
            <div className="flex justify-center mt-4 ">
              <p>
                Already have an account?
                <Link to={"/login"}>
                  <span className="text-primaryColor"> Sign in instead</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
