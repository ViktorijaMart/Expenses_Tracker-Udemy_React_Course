import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 11, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  {
    /* This is how react transforms our syntactic sugar code. It also shows why we can only return one parent element because in return we can't return two React.createElement*/
  }

  // return React.createElement (
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Let\'s get started'),
  //   React.createElement(Expenses, {expenses: expenses})
  // );

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      {/* reacts detects custom components when they start with uppercase. When they start with lowercase for react it means a inbuild elements */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
