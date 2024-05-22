import axios from "axios";
import { baseURL, normalHeaders } from "../utils/AppServices";

export const createUser = async (data) => {
  return await axios
    .post(`${baseURL}/users/register`, data, {
      headers: normalHeaders,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("Error : ", error);
    });
};
export const verifyUser = async (data) => {
  return await axios
    .post(`${baseURL}/users/login`, data, {
      headers: normalHeaders,
      withCredentials: true,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("Error : ", error);
    });
};

export const logoutuser = async () => {
  return await axios
    .post(
      `${baseURL}/users/logout`,
      {},
      {
        headers: normalHeaders,
        withCredentials: true,
      }
    )
    .then((response) => {
      if (response.status === 200) {
        localStorage.clear();
      }
      return response;
    })
    .catch((error) => {
      console.log("Error : ", error);
    });
};
