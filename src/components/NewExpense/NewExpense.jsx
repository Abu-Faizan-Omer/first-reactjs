import React from "react";
import ExpenseForm from "./ExpenseForm";
import FormikForm from "./FormikForm";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <FormikForm />
    </div>
  );
};

export default NewExpense;
