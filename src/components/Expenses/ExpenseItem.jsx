import "./ExpenseItem.css"



function ExpenseItem() {
  const expenseDate = new Date(2023, 7, 15).toISOString();
  const expenseLocation = "Bangalore";
  const expenseAmount = 10;

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__location">
        <h2>{expenseLocation}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
