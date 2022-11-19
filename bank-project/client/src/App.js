import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Transactions from "./components/transactions/Transactions";
import Breakdown from "./components/breakdown/breakdown";
import TransactionInput from "./components/operations/transactionInputs";
import Balance from "./components/balance/balance";

function App() {
  const [balance, setBalance] = useState(0);

  const getBalance = async () => {
    const balanceNewData = await axios.get("http://localhost:8000/balance");
    setBalance(balanceNewData.data[0]);
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <Router>
      <div className="App">
        <div id="main-links">
          <Link to="/">My transctions</Link>
          <Link to="/operations">operations</Link>
          <Link to="/breakdown">breakdown</Link>
        </div>
        <Balance balance={balance}></Balance>
        <Route
          exact
          path="/"
          render={() => <Transactions getBalance={getBalance} />}
        />
        <Route
          exact
          path="/operations"
          render={() => <TransactionInput getBalance={getBalance} />}
        />
        <Route exact path="/breakdown" render={() => <Breakdown />} />
      </div>
    </Router>
  );
}

export default App;
