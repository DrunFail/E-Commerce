import React from "react";
import TextInput from "../../../ui/textInput/TextInput";
import { OrderData } from "../interfaces/interfaces";


interface ContactFormProps {
    data: OrderData,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export default function ContactForm({ data, handleChange }: ContactFormProps) {

    return (
        <>
            <TextInput
                label={"Имя"}
                type={"text"}
                name={"name"}
                value={data.name}
                onChange={handleChange}
                placeholder={"имя"}
                required />

            <TextInput
                label={'фамилия'}
                type={'text'}
                name={'last_name'}
                value={data.last_name}
                onChange={handleChange}
                placeholder={'фамилия'}
                required />

            <TextInput
                label={"телефон"}
                type={"tel"}
                name={"phone"}
                value={data.phone}
                onChange={handleChange}
                placeholder={"телефон"}
                required />

            <TextInput
                label={"email"}
                type={"email"}
                name={"email"}
                value={data.email}
                onChange={handleChange}
                placeholder={"email"}
                required />

        </>
    );
}