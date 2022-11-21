import "./transaction.css";

export default function Transaction(props) {
  const onClickDeleteTransactionHandler = () => {
    props.onClickDeleteTransactionHandler(props.id);
  };

  function isPositive(amount) {
    return amount < 0
      ? "withraw transaction-amount"
      : "deposit transaction-amount";
  }

  return (
    <div className="transaction-container">
      <div className="transaction-card">
        <div className="transaction-name">
          {props.name}
          <div className="category-name">
            {" "}
            {props.category} - {props.vendor}
          </div>
        </div>

        <div className={isPositive(props.amount)}>{props.amount}</div>

        <button
          className="delete-btn"
          onClick={onClickDeleteTransactionHandler}
        >
          delete
        </button>
      </div>
    </div>
  );
}
