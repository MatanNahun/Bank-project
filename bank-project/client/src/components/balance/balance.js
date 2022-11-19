import axios from "axios";
import { useState, useEffect } from "react";
import "./balance.css";

export default function Balance() {
  const [balance, setBalance] = useState([]);

  const getBalance = async () => {
    const balanceNewData = await axios.get("http://localhost:8000/balance");
    setBalance(balanceNewData.data[0]);
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div className="balance-container">
      <div> Balance: $ {balance.balance}</div>
    </div>
  );
}
