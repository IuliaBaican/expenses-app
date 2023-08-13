import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";


const dummy_expenses = [
  {
    id: 'ei1',
    title: 'Toilet paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car insurance',
    amount: 294.67,
    date: new Date(2021, 4, 28),
  },
  {
    id: 'e4',
    title: 'New desk',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];


function App() {
// set state for the expenses array; initial state is set to the dummy_expenses array
  const [expenses, setExpenses] = useState(dummy_expenses);

  // callback function that adds a new expense using the data from NewExpense.js file
  const addExpenseHandler = expense => {
    // update the expenses array using the previous state and adding new expenses passed through the form at the beggining of the list
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  // way of adding elements instead of using JSX
  // return React.createElement(
  //   'div', {},
  //   React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expenses, {items: expenses})
  //   );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
