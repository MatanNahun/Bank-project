import axios from "axios";
import { useState, useEffect } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const clickOperationHandler = (event) => {
    console.log(event.target);
    axios
      .delete("http://localhost:8000/transactions")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

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
            <button onClick={clickOperationHandler}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
