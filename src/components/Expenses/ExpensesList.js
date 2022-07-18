import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found </h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((items) => (
        <ExpenseItem
          key={items.id}
          date={items.date}
          title={items.title}
          amount={items.amount}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
