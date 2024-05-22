import React, { useId } from "react";

const InputField = React.forwardRef(function InputField(
  { label, type = "text", className = "", name, placeholder, ...props },
  ref
) {
  const id = useId();
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        // {...register("email", { required: true })}
        type={type}
        id={id}
        name={name}
        className={`mt-2 p-2 w-full border text-black border-black rounded-md focus:outline-none focus:primaryColor focus:border-primaryColor bg-white ${className}`}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
      {/* {errors.email && (
        <p className="text-red-500 text-xs mt-1">Email is required</p>
      )} */}
    </div>
  );
});
export default InputField;
