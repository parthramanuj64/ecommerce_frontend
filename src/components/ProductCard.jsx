import React from "react";

function ProductCard({ name, price, category, date }) {
  return (
    <div className="pl-8 pr-8 pt-3">
      <div className="flex  p-2  rounded-md justify-between">
        <div className="flex flex-col items-start">
          <h1>Product Name : {name}</h1>
          <p className="">Product Category : {category}</p>
        </div>
        <div className="flex flex-col items-start">
          <h1>
            Product Price: <span className="text-primaryColor">{price}</span>
          </h1>
          <p className="">Date : {date}</p>
        </div>
      </div>
      <hr className="bg-primaryColor" />
    </div>
  );
}

export default ProductCard;
