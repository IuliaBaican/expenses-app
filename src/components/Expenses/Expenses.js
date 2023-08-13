import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from '../NewExpense/ExpensesChart';
import './Expenses.css'

function Expenses(props) {
    // set state for the year; initial state set to 2020
    const [filteredYear, setFilteredYear] = useState('2020');

    // update the state with the new value from the ExpensesFilter
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    // function that returns true if the date of the expense is = to the filtered year
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {/* using the filtered expenses as props */}
                <ExpensesChart expenses={filteredExpenses}/>
                {/* dinamic expression that points to the expensesContent variable */}
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;