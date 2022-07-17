import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">{props.amount}€</div>
    </div>
  );
};

export default ExpenseItem;
