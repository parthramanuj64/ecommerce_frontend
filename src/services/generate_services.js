import axios from "axios";
import { baseURL, normalHeaders } from "../utils/AppServices";

export const getfakerData = async (data) => {
  return await axios
    .get(`${baseURL}/faker/generate-data`, {
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
