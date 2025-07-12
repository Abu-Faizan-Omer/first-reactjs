import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  return   (
    <div>
      <h1>Let's get Started</h1>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App
