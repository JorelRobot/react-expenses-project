import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter.css';
import React, { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    let expense_items = [];

    props.data.forEach(expenseItem => {
        expense_items.push(
            <ExpenseItem
                key={expenseItem.title}
                title={expenseItem.title}
                amount={expenseItem.amount}
                date={expenseItem.date}>
            </ExpenseItem>);
    });

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expense_items}
            </Card>
        </div>
    );
}

export default Expenses;