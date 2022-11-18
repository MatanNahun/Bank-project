import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Transactions from "./components/transactions/Transactions";

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
      </div>
    </Router>
  );
}

export default App;
