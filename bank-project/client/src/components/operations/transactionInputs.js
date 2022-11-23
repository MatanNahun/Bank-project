import axios from "axios";
import { useState } from "react";

import "./transactionInputs.css";

const INITIAL_EMPTY_STRING = "";
const INITIAL_EMPTY_AMOUNT = 0;
const ONE = 1;
const MINUS_ONE = -1;
const POST_LINK_API = "http://localhost:8000/transactions";
const ADD_TRANSACTION_ERROR_ALERT = "please wait until transaction is added";
const ALERT_MESSAGE = "transaction is added successfully!";
const ALERT_INPUT_ERROR = "please enter all details";

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
  };

  const addTransaction = (transaction) => {
    axios
      .post(POST_LINK_API, transaction)
      .then(function () {
        props.getBalance();
        alert(ALERT_MESSAGE);
      })
      .catch(function () {
        alert(ADD_TRANSACTION_ERROR_ALERT);
      });
  };

  return (
    <div className="insert-transaction-container">
      <div className="insert-transactions-title">insert transactions:</div>
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
      {/* <div>
        <select
          name="category"
          value={transactionInput.category}
          onChange={hendleInput}
        >
          <option value="" hidden>
            Select category...
          </option>
          <option value="Salary">Salary</option>
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Technology">Technology</option>
          <option value="Other">Other</option>
        </select>
      </div> */}
      <button onClick={onAddTransactionHandler} name="deposit" id="deposit-btn">
        Deposit
      </button>{" "}
      <button onClick={onAddTransactionHandler} id="withraw-btn" name="withraw">
        Withraw
      </button>
    </div>
  );
}
