import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  console.log(props.items);
  return (
    <Card className="expenses">
      <ExpensesFilter />

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
