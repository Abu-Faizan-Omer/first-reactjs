import React from "react";
import ExpenseForm from "./ExpenseForm";
import FormikForm from "./FormikForm";
import "./NewExpense.css";

const NewExpense = () => {
    const saveExpenseDataHandler = (enterdExpenseData) => {
        console.log(enterdExpenseData) 
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
     {/*  <FormikForm/> */} 
    </div>
  );
};

export default NewExpense;
