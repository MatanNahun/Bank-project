import axios from "axios";
import { useState, useEffect } from "react";

import "./Transactions.css";
import Transaction from "../transaction/transaction";

const GET_TRANSACTIONS_API = "http://localhost:8000/transactions";
const DELETE_TRANSACTION_API = "http://localhost:8000/transactions";
const ERROR_ALERT = "please until trasaction is updated";
const SUCCESS_ALERT = "transaction deleted successfully!";

export default function Transactions(props) {
  const [transactions, setTransactions] = useState([]);

  const getAllTransactions = async () => {
    const transactionsNewData = await axios.get(GET_TRANSACTIONS_API);
    setTransactions(transactionsNewData.data);
  };

  const onClickDeleteTransactionHandler = (transactionId) => {
    axios
      .delete(`${DELETE_TRANSACTION_API}/${transactionId}`)
      .then(function () {
        alert(SUCCESS_ALERT);
        getAllTransactions();
        props.getBalance();
      })
      .catch(function () {
        alert(ERROR_ALERT);
      });
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <div className="transactions-container">
      <div className="all-transactions-title">all transactions:</div>
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
