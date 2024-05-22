import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { loginStatus } from "../utils/AppStrings";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  //   const [isCookieSet, setIsCookieSet] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem(loginStatus);
    setLoader(true);
    if (!status) {
      navigate("/login");
    } else {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
