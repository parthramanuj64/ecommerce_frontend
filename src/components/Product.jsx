import React, { useEffect, useState } from "react";
import { getProductItems } from "../services/product_services.js";
import ProductCard from "./ProductCard.jsx";

function Product() {
  const [products, setProducts] = useState([]);
  const getproduct = async () => {
    const response = await getProductItems();
    console.log(response.data.statusCode);
    if (response.data.statusCode === 200) {
      setProducts(response.data.data);
    }
  };

  useEffect(() => {
    getproduct();
  }, []);
  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Product List</h1>
      <div className="w-full max-w-5xl h-full overflow-y-scroll bg-gray-100 p-4">
        {products.map((pro, index) => (
          <ProductCard
            key={index} // Add a key prop to each item
            name={pro.name}
            category={pro.category}
            price={pro.price}
            date={pro.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
