import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';

const DUMMY_EXPENSES = [
  { title: 'Car Insurance', date: new Date(2021, 2, 28), amount: 294.67 },
  { title: 'New TV', date: new Date(2021, 8, 15), amount: 799.49 },
  { title: 'New Desk', date: new Date(2021, 11, 3), amount: 450 }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
