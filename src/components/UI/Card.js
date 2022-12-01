import React from "react";
import "./Card.css";

const Card = (props) => {
  {
    /* This time this Card component is used to remove duplicating css from Expenses and ExpenseItem (box-shadow and border) */
  }
  {
    /* to get all the classes used in Card component in parents we use props.className */
  }
  const classes = "card " + props.className;

  {
    /* props.children pass in the content that is between Card component in parents */
  }
  return <div className={classes}>{props.children}</div>;
};

export default Card;
