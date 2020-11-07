import React from "react";
import ExpenseInput from "./ExpenseInput";
import ToDoTable from "./ToDoTable";
//import "./style.css"

function App() {
  return (
    <div>
      <h1 id="header">Expense Tracker</h1>
      <ExpenseInput />
      <ToDoTable />
    </div>
  );
}

export default App;
