import React from "react";
import NormalButton from "./Button";
import { getfakerData } from "../services/generate_services";
import Swal from "sweetalert2";
import { logoutuser } from "../services/auth_services";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const generateDataCall = async () => {
    await getfakerData()
      .then((response) => {
        // console.log(response.);
        Swal.fire({
          title: "Data is Generated Successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logoutUserPerform = async () => {
    await logoutuser()
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <header className=" ">
      <div className="flex items-center h-full justify-end space-x-5 pr-5 pb-5 ">
        <NormalButton
          title={"GenerateData"}
          className="w-32"
          onClick={(e) => generateDataCall()}
        />
        <NormalButton
          title={"logout"}
          className="w-32 bg-red-500"
          onClick={(e) => logoutUserPerform()}
        />
      </div>
    </header>
  );
}

export default Header;
