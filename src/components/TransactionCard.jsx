import React, { useState } from "react";
import NormalButton from "./Button.jsx";
import { createPaymentLink } from "../services/transaction_services.js";

function TransactionCard({
  amount,
  paymentMethod,
  date,
  productName,
  customerName,
}) {
  const [paymentLink, setPaymentLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const callCreateLink = async (amount, productName) => {
    setIsLoading(true);
    const reqData = {
      amount: amount,
      name: productName,
    };
    await createPaymentLink(reqData)
      .then((response) => {
        setPaymentLink(response.data.data);
      })
      .catch((error) => {});
    setIsLoading(false);
  };
  return (
    <div className="pl-8 pr-8 pt-3">
      <div className="flex  p-2  rounded-md justify-between">
        <div className="flex flex-col items-start">
          <h1>Customer Name: {customerName}</h1>
          <h1>Transation Amount : {amount}</h1>
          <p className="">Transaction Method : {paymentMethod}</p>

          {/* <button
            type="button"
            onClick={(e) => callCreateLink(amount, productName)}
          >
            Createpayment
          </button> */}
          {isLoading ? (
            <h1 className="mt-3 text-primaryColor font-bold">Loading...</h1>
          ) : paymentLink ? (
            <a
              href={paymentLink}
              className="underline text-primaryColor"
              target="_blank"
            >
              {paymentLink}
            </a>
          ) : (
            <NormalButton
              title={"Create payment link"}
              className="mt-1"
              onClick={(e) => callCreateLink(amount, productName)}
            />
          )}
        </div>
        <div className="flex flex-col items-start">
          <h1>Product Name : {productName}</h1>
          <p className="">Date : {date}</p>
        </div>
      </div>
      <hr className="bg-primaryColor" />
    </div>
  );
}

export default TransactionCard;
