import "./transaction.css";

export default function Transaction(props) {
  const onClickDeleteTransactionHandler = () => {
    props.onClickDeleteTransactionHandler(props.id);
  };

  function isPositive(amount) {
    return amount < 0 ? "withraw" : "deposit";
  }

  return (
    <div className="transaction-container">
      <div>{props.name}</div>{" "}
      <div className={isPositive(props.amount)}>{props.amount}</div>
      <div>{props.category}</div>
      <button onClick={onClickDeleteTransactionHandler}>delete</button>
    </div>
  );
}
