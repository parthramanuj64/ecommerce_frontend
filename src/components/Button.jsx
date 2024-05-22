import React from "react";

function NormalButton({ type = "submit", className = "", title, ...props }) {
  return (
    <button
      type={type}
      className={` bg-primaryColor text-white py-2 px-4 rounded-md focus:outline-none mt-5 ${className}`}
      {...props}
    >
      {title}
    </button>
  );
}

export default NormalButton;
