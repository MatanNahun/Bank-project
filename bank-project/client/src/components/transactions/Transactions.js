import axios from "axios";
import { useState, useEffect } from "react";

import Transaction from "../transaction/transaction";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const getAllTransactions = async () => {
    const transactions = await axios.get("http://localhost:8000/transactions");
    setTransactions(transactions.data);
  };

  const onClickDeleteTransactionHandler = (transactionId) => {
    axios
      .delete(`http://localhost:8000/transactions/${transactionId}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
    getAllTransactions();
  };

  useEffect(() => {
    getAllTransactions();
  }, [getAllTransactions]);

  return (
    <div className="transactions-container">
      all transactions
      <div>
        {" "}
        {transactions.map((transaction) => (
          <div>
            <Transaction
              key={transaction.id}
              name={transaction.name}
              id={transaction.id}
              category={transaction.category}
              amount={transaction.amount}
              onClickDeleteTransactionHandler={onClickDeleteTransactionHandler}
            ></Transaction>
          </div>
        ))}
      </div>
    </div>
  );
}
