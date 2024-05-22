import axios from "axios";
import { baseURL, normalHeaders } from "../utils/AppServices";

export const getTransactionItems = async (data) => {
  return await axios
    .get(`${baseURL}/transactions/get-transactions`, {
      headers: normalHeaders,
      withCredentials: true,
    })
    .then((response) => {
      console.log("Transactions In Fun", response.data);
      return response;
    })
    .catch((error) => {
      console.log("Error : ", error);
    });
};

export const createPaymentLink = async (data) => {
  return await axios
    .post(`${baseURL}/transactions/create-payment-link`, data, {
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
