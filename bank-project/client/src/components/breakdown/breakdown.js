import axios from "axios";
import { useState, useEffect } from "react";

import "./breakdown.css";

export default function Breakdown() {
  const [breakdown, setBreakdown] = useState([]);

  useEffect(() => {
    const getBreakdownExpensesByCategory = async () => {
      const breakdown = await axios.get("http://localhost:8000/categories");
      setBreakdown(breakdown.data);
    };
    getBreakdownExpensesByCategory();
  }, []);

  return (
    <div className="breakdown-container">
      <div className="breakdown-title">breakdown</div>
      <div>
        {" "}
        {breakdown.map((singleBreakdown) => (
          <div>
            {singleBreakdown.category} : {singleBreakdown.totalAmount}
          </div>
        ))}
      </div>
    </div>
  );
}
