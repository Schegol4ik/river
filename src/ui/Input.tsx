import React from 'react';
import '../styles/input.scss'

type InputProps = {
    width?: number | string;
    height?: number | string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    id?: string;
}

export const Input = ({value, height, onChange, width, id}: InputProps) => {
    return (
        <input
            className="input"
            id={id}
            type="text"
            value={value}
            onChange={e => onChange && onChange(e)}
            style={{width: `${width}px`, height: `${height}px`}}
        />
    );
};

