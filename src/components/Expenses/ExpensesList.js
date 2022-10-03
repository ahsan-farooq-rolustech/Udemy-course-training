import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props =>
{
    /**
     * now after filtering if we have something the list meaning we donot have an empty list then we 
     * will overwrite the expenseContent variable and we will store our filtered list in it. otherwise if the we donot have
     * any Expense in the filteredExpenses list then this if condition will return false and the initial value of no expense found 
     * will be in there in the variable and it will be rendered in the JSX as it is.
     */
    if(props.items.length===0)
    {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    return <ul className="expenses-list">
        { props.items.map((expense) => (
            <ExpenseItem
                title={ expense.title }
                amount={ expense.amount }
                date={ expense.date }
            />
        )) }
    </ul>
};


export default ExpensesList;