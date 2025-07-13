// Write your code below:
import React from "react"
import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = (props) => {

  const expensesOnlyArray = props.chartExpenses.map((monthExpenseData) => {
    return monthExpenseData.price
  })

  
  
  const charData = [
    { expenseMonth: "Jan", expenseValue: 0 },
    { expenseMonth: "Feb", expenseValue: 0 },
    { expenseMonth: "Mar", expenseValue: 0 },
    { expenseMonth: "Apr", expenseValue: 0 },
    { expenseMonth: "May", expenseValue: 0 },
    { expenseMonth: "Jun", expenseValue: 0 },
    { expenseMonth: "July", expenseValue: 0 },
    { expenseMonth: "Aug", expenseValue: 0 },
    { expenseMonth: "Sep", expenseValue: 0 },
    { expenseMonth: "Oct", expenseValue: 0 },
    { expenseMonth: "Nov", expenseValue: 0 },
    { expenseMonth: "Dec", expenseValue: 0 },
  ]

  // for (let i = 0; i < props.charExpenses.length; i++)
  // {
  //   charData[props.charExpenses[i].date.getMonths()].expenseValue +=
  //     props.charExpenses[i].price
  // }
  
  for (let expenses of props.chartExpenses)
  {
    charData[expenses.date.getMonth()].expenseValue += expenses.price
  }
  const maxValue = Math.max(...expensesOnlyArray)

  return (
    <div className="chart">
      {charData.map((monthData) => (
        <ChartBar
          key={monthData.expenseMonth}
          label={monthData.expenseMonth}
          value={monthData.expenseValue}
          maxValue={maxValue}
        />
      ))}
    </div>
  )

}

export default Chart