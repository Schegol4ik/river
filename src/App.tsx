import React, {useEffect, useState} from 'react';
import {LineChartRender} from "./components/LineChartRender";
import Form from "./components/Form";
import {Data, Step} from "./utils/Types";
import {v1} from "uuid";
import './App.scss'


const App = () => {

    const [totalCount, setTotalCount] = useState('0')
    const [step, setStep] = useState('3')
    const [data, setData] = useState<Array<Data>>([])

    useEffect(() => {
        let newData: Data
        let newDataArr: Data[] = []

        for (let i = Number(totalCount); i >= 3; i = i - Number(step)) {
            newData = {id: v1(), time: 0, name: String(i)}
            newDataArr.unshift(newData)
        }
        setData(newDataArr)
    }, [totalCount, step])

    const onChangeTime = (id: string, value: string) => {
        setData(data.map(item => {
            if (item.id === id) {
                item.time = Number(value)
            }
            return item
        }))
    }

    return (
        <div style={{margin: '50px 50px'}} className="app-container">
            <Form data={data} setStep={setStep} setTotalCount={setTotalCount} totalCount={totalCount} step={step}
                  onChangeTime={onChangeTime}/>
            <LineChartRender data={data}/>
        </div>
    );
};

export default App;