import "./balance.css";

export default function Balance(props) {
  const balanceValue = props.balance.balance;
  return (
    <div className="balance-container">
      <div className="balance-content"> Balance: $ {balanceValue}</div>
    </div>
  );
}
