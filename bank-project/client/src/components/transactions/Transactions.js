import axios from "axios";
import { useState, useEffect } from "react";

import Transaction from "../transaction/transaction";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const getAllTransactions = async () => {
    const transactionsNewData = await axios.get(
      "http://localhost:8000/transactions"
    );
    setTransactions(transactionsNewData.data);
  };

  const onClickDeleteTransactionHandler = (transactionId) => {
    axios
      .delete(`http://localhost:8000/transactions/${transactionId}`)
      .then(function (response) {
        getAllTransactions();
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

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
