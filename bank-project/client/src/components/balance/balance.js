import axios from "axios";
import { useState, useEffect } from "react";

export default function Balance() {
  const [balance, setBalance] = useState([]);

  const getBalance = async () => {
    const balance = await axios.get("http://localhost:8000/balance");
    setBalance(balance.data[0]);
  };

  useEffect(() => {
    getBalance();
  }, [balance]);

  return (
    <div className="balance-container">
      <div> Balance: {balance.balance}</div>
    </div>
  );
}
