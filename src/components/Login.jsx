import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { loginImage } from "../utils/AppImages";
import { Link, useNavigate } from "react-router-dom";
import { verifyUser } from "../services/auth_services";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";
import { loginStatus } from "../utils/AppStrings";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    // Handle login submission
    const response = await verifyUser(data);

    if (response.status === 200) {
      dispatch(authLogin(response.data));
      localStorage.setItem(loginStatus, true);
      navigate("/");
    }
    reset();
  };

  return (
    <div className="bg-white h-full w-full">
      <div className="md:grid md:grid-cols-4 h-full md:divide-x-2">
        <div className=" col-span-2 flex items-center justify-center ">
          <div className="bg-lightPrimaryColor h-full w-full md:flex flex-col justify-center hidden">
            <img src={loginImage} alt="" srcset="" className="w-full h-3/4 " />
          </div>
        </div>
        <div className=" col-span-2 text-black text-start p-5 flex flex-col h-full justify-center pl-24 pr-24">
          <div>
            <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
            <p className="text-gray-500 text-sm font-semibold">
              Please sign-in to your account and start the adventure
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
            <button
              type="submit"
              className="w-full bg-primaryColor text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-5"
            >
              Login
            </button>
            <div className="flex justify-center mt-4">
              <p>
                New on our platform?{" "}
                <Link to={"/register"}>
                  <span className="text-primaryColor">Create an account</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
