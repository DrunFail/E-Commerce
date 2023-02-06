import React from "react";
import TextInput from "../../../../../ui/textInput/TextInput";
import { OrderData } from "../../../interfaces/interfaces";


interface DeliveryFormProps {
    data: OrderData,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export default function DeliveryForm({ data, handleChange }: DeliveryFormProps) {
    return (
        <>
            <TextInput
                label={"город"}
                type={"text"}
                name={"city"}
                value={data.city}
                onChange={handleChange}
                placeholder={"город"}
                required />

            <TextInput
                label={"улица"}
                type={"text"}
                name={"street"}
                value={data.street}
                onChange={handleChange}
                placeholder={"улица"}
                required />

            <TextInput
                label={"дом"}
                type={"tel"}
                name={"home"}
                value={data.home}
                onChange={handleChange}
                placeholder={"дом"}
                mode={'numeric'}
                required />

            <TextInput
                label={"подъезд"}
                type={"tel"}
                name={"home2"}
                value={data.home2}
                onChange={handleChange}
                placeholder={"подъезд"}
                mode={'numeric'}
                required />

            <TextInput
                label={"квартира"}
                type={"tel"}
                name={"home3"}
                value={data.home3}
                onChange={handleChange}
                placeholder={"квартира"}/>
        </>
    );
}