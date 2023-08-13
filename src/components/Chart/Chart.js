import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    // getting the value of each data point as an array of numbers stored in dataPointsValues
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // calculate the maximum value across all month
    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {/* outputting the bars dynamically by going through an array of dataPoints and mapping every dataPoint to a chart bar */}
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div >
    );
};

export default Chart;