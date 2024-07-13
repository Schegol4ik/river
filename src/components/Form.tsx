import React, {ChangeEvent} from 'react';
import {Data, Step} from "../utils/Types";
import {Input} from "../ui/Input";
import '../styles/form.scss'

type FormProps = {
    data: Array<Data>
    setTotalCount: (value: string) => void
    setStep: (value: string) => void
    totalCount: string
    step: string
    onChangeTime: (id: string, value: string) => void
}

const Form = ({data, setStep, setTotalCount, totalCount, step, onChangeTime}: FormProps) => {

    const onHandlerTime = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        if (/^\d*$/.test(value)) {
            onChangeTime(id, value)
        }

    }
    const handleChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        if (/^\d*$/.test(value)) {
            setTotalCount(value);
        }
    }
    const handleChangeStep = (inputValue: string) => {

        setStep(inputValue);
    }


    return (
        <div className='form_container'>
            <div className='form_container__settings'>
                <div>
                    <label htmlFor="count_max">Всего оборотов катушки: </label>
                    <Input
                        id="count_max"
                        width='30'
                        height='30'
                        value={totalCount}
                        onChange={e => handleChangeCount(e)}
                    />
                </div>
                <div>
                    <label htmlFor="step">Шаг: </label>
                    <select id="step"
                            onChange={e => handleChangeStep(e.currentTarget.value)} value={step}>
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>

                </div>


            </div>
            <div className="form_container__steps">

                {
                    data?.map(({time, name, id}, i) => <div key={id}
                                                            className="form_container__steps__step">
                        <label htmlFor="time_on_step">{name} об </label>
                        <Input
                            id="time_on_step"
                            value={time}
                            width="40"
                            height='30'
                            onChange={e => onHandlerTime(id, e)}/>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Form;