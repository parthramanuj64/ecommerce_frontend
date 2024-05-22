import React, { useEffect, useState } from "react";
import { getProductItems } from "../services/product_services";
import { getcustomerItems } from "../services/customer_services";
import { getTransactionItems } from "../services/transaction_services";
import * as d3 from "d3";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import * as d3Collection from "d3-collection";

function Dashbaord() {
  const [products, setProducts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [customers, setCustomers] = useState([]);

  const getAlldata = async () => {
    await getProductItems().then((response) => {
      setProducts(response.data.data);
      console.log("products", products);
    });

    await getcustomerItems().then((response) => {
      setCustomers(response.data.data);
    });
    await getTransactionItems().then((response) => {
      setTransactions(response.data.data);
    });
  };

  useEffect(() => {
    getAlldata();
  }, []);

  const productSalesData = products.map((product) => ({
    name: product.name,
    sales: transactions.filter((t) => t.product._id === product._id).length,
  }));

  console.log("Product sales data: ", productSalesData);

  const transactionVolumeData = transactions.map((transaction) => ({
    date: transaction.createdAt,
    amount: transaction.amount,
  }));

  const customerDistributionData = Array.from(
    d3.rollup(
      customers,
      (v) => v.length,
      (d) => {
        const addressParts = d.address ? d.address.split(",") : [];
        return addressParts.length > 1 ? addressParts[1].trim() : "Unknown";
      }
    ),
    ([region, count]) => ({ region, count })
  );
  return (
    <div className="pl-8 pr-8">
      <div className="flex space-x-10 mt-5">
        <div>
          <h2 className="text-xl font-bold mb-4 mt-3">Product Sales</h2>
          <BarChart data={productSalesData} />
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold mb-4">
            Transaction Volume Over Time
          </h2>
          <LineChart data={transactionVolumeData} />
        </div>
      </div>
    </div>
  );
}

export default Dashbaord;
