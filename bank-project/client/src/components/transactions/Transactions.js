import axios from "axios";
import { useState, useEffect } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getAllTransactions = async () => {
      const transactions = await axios.get(
        "http://localhost:8000/transactions"
      );
      setTransactions(transactions.data);
    };
    getAllTransactions();
  }, []);

  return (
    <div className="transactions-container">
      all transactions
      <div>
        {" "}
        {transactions.map((transaction) => (
          <div>
            {transaction.name} | {transaction.category} | {transaction.amount}
          </div>
        ))}
      </div>
    </div>
  );
}
