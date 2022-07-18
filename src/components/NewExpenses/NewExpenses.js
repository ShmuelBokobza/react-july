import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const saveExpenseDataHandler = (formSubmit) => {
    const expenseData = {
      ...formSubmit,
      id: Math.random().toString(),
    };
    props.onFormSubmit(expenseData);
    setShowExpenseForm(false);
  };
  const isShowingFormHandler = () => {
    setShowExpenseForm(true);
  };
  const isNoShowingFormHandler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button onClick={isShowingFormHandler}> Add Expense</button>
      )}
      {showExpenseForm && (
        <ExpenseForm
          onCancel={isNoShowingFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
