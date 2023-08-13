import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    // callback function that sends the data from ExpenseForm.js
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            // spread operator that combines the properties from 'enteredExpenseData' and a random id
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        //  sends the expenseData to the onAddExpense function from App.js (lifting state up)
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    // callback function that sets the state to true when the Add New Expense button is clicked
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    // callback function that sets the state to false when the Cancel button is clicked
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={SaveExpenseDataHandler}
                    // when the Cancel button of the form is clicked, the function stopEdditingHandler is called
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;