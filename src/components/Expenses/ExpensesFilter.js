import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = ({ onChangeFilter, selected }) => {
  const dropdownChangeHandler = (event) => {
    const selectedYear = event.target.value;

    onChangeFilter(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
