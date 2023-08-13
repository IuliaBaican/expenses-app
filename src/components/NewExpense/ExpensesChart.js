import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    // array that contains objects that correspond to every month of the year
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sept', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];
    // going through every expense and getting the corresponding month; 
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //starting at 0 => Jan => 0
        // setting the value of each object in the chartDataPoints array as the sum of every expense in the corresponding month
        // use the month as an index in chartDataPoints array
        chartDataPoints[expenseMonth].value += expense.amount;
    }

// setting the props as chartDataPoints
    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;