import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const setFilterHandler = (dateFiltered) => {
    setFilteredYear(dateFiltered);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        currentSelected={filteredYear}
        onSetFilter={setFilterHandler}
      />

      {props.items.map((items) => {
        return (
          <ExpenseItem
            key={items.id}
            date={items.date}
            title={items.title}
            amount={items.amount}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};

export default Expenses;
