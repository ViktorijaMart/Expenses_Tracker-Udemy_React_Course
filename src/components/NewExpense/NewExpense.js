import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  // to pass data from child to parent
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // not the best way as it can produce same ids
    };
    onAddExpense(expenseData);
    setShowForm(!showForm);
  };

  const [showForm, setShowForm] = useState(false);

  const clickButtonHandler = () => {
    setShowForm(!showForm);
  };

  const removeFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={clickButtonHandler}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          oncancelForm={removeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
