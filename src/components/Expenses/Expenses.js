import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import React from "react";

const Expenses = (props) => {
    //*/
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
    //*/

    /*/
    let expense_items = props.data.map(expenseItem => {
        <ExpenseItem 
            title={expenseItem.title} 
            amount={expenseItem.amount} 
            date={expenseItem.date}>
        </ExpenseItem>
    });
    //*/

    return React.createElement(Card, {className: "expenses"}, expense_items);

    /*/
    return (
        <Card className="expenses">
            { expense_items }
        </Card>
    );
    //*/
}

export default Expenses;