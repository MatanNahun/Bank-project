import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Transactions from "./components/transactions/Transactions";
import Breakdown from "./components/breakdown/breakdown";
import TransactionInput from "./components/operations/transactionInputs";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="main-links">
          <Link to="/">My transctions</Link>
          <Link to="/operations">operations</Link>
          <Link to="/breakdown">breakdown</Link>
        </div>
        <Route exact path="/" render={() => <Transactions />} />
        <Route exact path="/operations" render={() => <TransactionInput />} />
        <Route exact path="/breakdown" render={() => <Breakdown />} />
      </div>
    </Router>
  );
}

export default App;
