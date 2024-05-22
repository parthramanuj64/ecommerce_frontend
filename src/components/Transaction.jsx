import React, { useEffect, useState } from "react";
import { getTransactionItems } from "../services/transaction_services";
import TransactionCard from "./TransactionCard";

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const getTransactions = async () => {
    const response = await getTransactionItems();
    console.log(response.data.statusCode);
    if (response.data.statusCode === 200) {
      setTransactions(response.data.data);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Transaction List</h1>
      <div className="w-full max-w-5xl h-full overflow-y-scroll bg-gray-100 p-4">
        {transactions.map((transaction, index) => (
          <TransactionCard
            key={index} // Add a key prop to each item
            amount={transaction.amount}
            paymentMethod={transaction.paymentMethod}
            date={transaction.createdAt}
            productName={transaction.product.name}
            customerName={transaction.customer.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Transaction;
