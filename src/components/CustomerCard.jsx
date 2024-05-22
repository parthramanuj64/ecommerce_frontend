import React from "react";

function CustomerCard({ name, email, address, date }) {
  return (
    <div className="pl-8 pr-8 pt-3">
      <div className="flex  p-2  rounded-md justify-between">
        <div className="flex flex-col items-start">
          <h1>Customer Name : {name}</h1>
          <p className="">Customer email : {email}</p>
        </div>
        <div className="flex flex-col items-start">
          <h1>
            Product Address: <span className="">{address}</span>
          </h1>
          <p className="">Date : {date}</p>
        </div>
      </div>
      <hr className="bg-primaryColor" />
    </div>
  );
}

export default CustomerCard;
