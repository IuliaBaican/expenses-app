import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

    // set the default meesage to render if there are no expenses
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }

    // if there are more than 0 expenses, render the list of data dynamically
    return <ul className='expenses-list'>
        {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </ul>
};

export default ExpensesList;