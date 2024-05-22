import axios from "axios";
import { baseURL, normalHeaders } from "../utils/AppServices";

export const getProductItems = async (data) => {
  return await axios
    .get(`${baseURL}/product/get-product`, {
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
