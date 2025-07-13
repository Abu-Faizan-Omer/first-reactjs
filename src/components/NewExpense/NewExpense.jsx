import React from "react";
import ExpenseForm from "./ExpenseForm";
import FormikForm from "./FormikForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData={...enterdExpenseData,id:Math.random().toString()}//for Id create
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
     {/*  <FormikForm/> */} 
    </div>
  );
};

export default NewExpense;
