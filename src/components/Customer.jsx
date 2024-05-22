import React, { useEffect, useState } from "react";
import { getcustomerItems } from "../services/customer_services";
import CustomerCard from "./CustomerCard";

function Customer() {
  const [customers, setCustomers] = useState([]);
  const getCustomers = async () => {
    const response = await getcustomerItems();
    console.log(response.data.statusCode);
    if (response.data.statusCode === 200) {
      setCustomers(response.data.data);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Customer List</h1>
      <div className="w-full max-w-5xl h-full overflow-y-scroll bg-gray-100 p-4">
        {customers.map((customer, index) => (
          <CustomerCard
            key={index} // Add a key prop to each item
            name={customer.name}
            email={customer.email}
            address={customer.address}
            date={customer.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default Customer;
