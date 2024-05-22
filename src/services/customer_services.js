import axios from "axios";
import { baseURL, normalHeaders } from "../utils/AppServices";

export const getcustomerItems = async (data) => {
  return await axios
    .get(`${baseURL}/customer/get-customers`, {
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
