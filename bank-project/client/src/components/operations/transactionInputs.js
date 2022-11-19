import axios from "axios";
import { useState } from "react";

const INITIAL_EMPTY_STRING = "";
const INITIAL_EMPTY_AMOUNT = 0;
const ALERT_MESSAGE = "transaction is added successfully!";
const ALERT_INPUT_ERROR = "please enter all details";
const ONE = 1;
const MINUS_ONE = -1;
const POST_LINK_API = "http://localhost:8000/transactions";
const ADD_TRANSACTION_ERROR_ALERT = "please wait until transaction is added";

export default function TransactionInput(props) {
  const [transactionInput, setTransactionInput] = useState({
    name: INITIAL_EMPTY_STRING,
    amount: INITIAL_EMPTY_AMOUNT,
    vendor: INITIAL_EMPTY_STRING,
    category: INITIAL_EMPTY_STRING,
  });

  const hendleInput = function (event) {
    const name = event.target.name;
    const value = event.target.value;
    setTransactionInput({ ...transactionInput, [name]: value });
  };

  const onAddTransactionHandler = (event) => {
    if (
      transactionInput.name === INITIAL_EMPTY_STRING ||
      transactionInput.amount === INITIAL_EMPTY_AMOUNT ||
      transactionInput.vendor === INITIAL_EMPTY_STRING ||
      transactionInput.category === INITIAL_EMPTY_STRING
    ) {
      alert(ALERT_INPUT_ERROR);
      return;
    }

    const transactionNewData = { ...transactionInput };
    event.target.name === "deposit"
      ? (transactionNewData.amount = ONE * transactionNewData.amount)
      : (transactionNewData.amount = MINUS_ONE * transactionNewData.amount);

    addTransaction(transactionNewData);
    alert(ALERT_MESSAGE);
  };

  const addTransaction = (transaction) => {
    axios
      .post(POST_LINK_API, transaction)
      .then(function () {
        props.getBalance();
      })
      .catch(function (error) {
        console.log(error);
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
          type="number"
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
