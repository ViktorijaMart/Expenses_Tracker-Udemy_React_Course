import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  {
    /* useState is one of the most important hooks. Most of the time it should be called in the component (not inside a function inside a component). 
    useState returns an array with a value and a function to change the value 
    Every ExpenseItem component have their own useState and this is why triggering one of item's useState doesn't affect other ExpenseItem components */
  }
  // const [stateTitle, setTitle] = useState(title);

  // const clickHandler = () => {
  //   setTitle("Updated");
  // };

  {
    /* usually functions executed on events are named: eventname + Handler */
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount} &euro;</div>
      </div>
      {/* in the event we put function name without brackets!!! Overwise function will be executed immediately when this return code is read by the browser */}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
