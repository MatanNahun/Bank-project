import axios from "axios";
import { useState } from "react";

export default function TransactionInput() {
  const [transactionInput, setTransactionInput] = useState({
    name: "",
    amount: "",
    vendor: "",
    category: "",
  });

  const hendleInput = function (event) {
    const name = event.target.name;
    const value = event.target.value;
    setTransactionInput({ ...transactionInput, [name]: value });
  };

  const onAddTransactionHandler = (event) => {
    const transaction = { ...transactionInput };
    event.target.name === "deposit"
      ? (transaction.amount = 1 * transaction.amount)
      : (transaction.amount = -1 * transaction.amount);

    addTransaction(transaction);
  };

  const addTransaction = (transaction) => {
    axios
      .post("http://localhost:8000/transactions", transaction)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="insert-transaction-container">
      insert transactions
      <div>
        <input
          className="transaction-name-input"
          placeholder="product name"
          value={transactionInput.name}
          onChange={hendleInput}
          name="name"
        />
      </div>
      <div>
        <input
          className="transaction-amount-input"
          placeholder="amount name"
          value={transactionInput.amount}
          onChange={hendleInput}
          name="amount"
        />
      </div>
      <div>
        <input
          className="transaction-vendor-input"
          placeholder="vendor name"
          value={transactionInput.vendor}
          onChange={hendleInput}
          name="vendor"
        />
      </div>
      <div>
        <input
          className="transaction-category-input"
          placeholder="category name"
          value={transactionInput.category}
          onChange={hendleInput}
          name="category"
        />
      </div>
      <button onClick={onAddTransactionHandler} name="deposit" id="deposit-btn">
        Deposit
      </button>{" "}
      <button onClick={onAddTransactionHandler} id="withraw-btn" name="withraw">
        Withraw
      </button>
    </div>
  );
}
