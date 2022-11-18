import axios from "axios";
import { useState, useEffect } from "react";

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
      breakdown
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
