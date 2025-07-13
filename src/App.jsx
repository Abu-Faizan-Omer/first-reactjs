import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: "1", location : "Bangalore", date: new Date(2023, 7, 15), title: "Insurance", price: 100 },
    { id: "2", location : "Delhi",date: new Date(2023, 3, 25), title: "Book", price: 10 },
    { id: "3", location : "Hyderabad", date: new Date(2023, 10, 11), title: "Pen", price: 1 },
    { id: "4", location : "Mumbai", date: new Date(2023, 1, 14), title: "Laptop", price: 200 },
  ];

  const formDataHandler = (enteredFormData) => {
    console.log(enteredFormData)
  }

  return (
    <div>
      <NewExpense onGetFormData={formDataHandler} />
     <Expenses expenses={expenses}/>

    </div>
  );
}

export default App
