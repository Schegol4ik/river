import React from 'react';
import {Line, LineChart, XAxis, YAxis} from "recharts";
import {Data} from "../utils/Types";

type LineChartDataProps = {
    data: Array<Data>
}

export const LineChartRender = ({data}: LineChartDataProps) => {

    return (
        <LineChart width={860} height={200} data={data}>
            <Line type="monotone" dataKey="time" stroke="#8884d8"/>
            <XAxis dataKey="name" orientation="top" interval={0} />
            <YAxis orientation="right" interval="preserveEnd" reversed={true}/>
        </LineChart>
    );
};

