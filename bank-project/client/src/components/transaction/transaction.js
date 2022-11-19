export default function Transaction(props) {
  const onClickDeleteTransactionHandler = () => {
    props.onClickDeleteTransactionHandler(props.id);
  };

  return (
    <div className="transaction-container">
      <div>{props.name}</div> <div>{props.amount}</div>
      <div>{props.category}</div>
      <button onClick={onClickDeleteTransactionHandler}>delete</button>
    </div>
  );
}
