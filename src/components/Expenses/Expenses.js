import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.items.date}
        title={props.items.title}
        amount={props.items.amount}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
