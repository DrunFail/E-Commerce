import React from "react";
import styles from './TextInput.module.scss';

interface TextInput {
    label: string,
    type: string,
    name: string,
    value: any,
    onChange: any,
    placeholder: string,
    mode?: any,
    required?: boolean
}


export default function TextInput({ label, type, name, value, onChange, placeholder, required, mode }:TextInput) {
    return (
        <div className={styles.container }>
            <label htmlFor={name }>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                inputMode={mode }
                required={required }
            />
        </div>
        );
}