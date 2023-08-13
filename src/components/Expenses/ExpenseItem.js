import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <li>
            <Card className="expense-item">
                {/* building the expense items usind data passed by props */}
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                </div>
                <div className="expense-item__price">${props.amount}</div>
            </Card>
        </li>
    );
};

export default ExpenseItem;