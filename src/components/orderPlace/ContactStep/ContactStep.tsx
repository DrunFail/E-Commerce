import React from "react";

type NewOrderData = {
    contacts: {
        name: string,
        last_name: string,
        phone: string,
        email: string
    },
    delivery: {
        delivery_method: string,
        delivery_shop: string,
        city: string,
        street: string,
        home: string,
        home2: string,
        home3: string,
    },

    payment: string,
    order: {
        id: string,
        title: string,
        count: number,
        price: number
    } | {
        id: string,
        title: string,
        count: number,
        price: number
    }[]
}




interface ContactFormProps {
    contacts: {
        name: string,
        last_name: string,
        email: string,
        phone: string
    }
    newOrderData: NewOrderData,
    setNewOrderData: any
}


export default function ContactForm({ newOrderData, setNewOrderData, contacts }: ContactFormProps) {
    const addName = (e: React.ChangeEvent<HTMLInputElement>) => {
        contacts.name = e.target.value
        setNewOrderData({ ...newOrderData, contacts })
    }

    return (
        <>
            
            <section>
                <label
                    htmlFor='name'>
                    имя
                </label>
                <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder="имя"
                    required
                    value={contacts.name}
                    onChange={addName}
                />
            </section>

            <section>

                <label
                    htmlFor='last_name'>
                    фамилия
                </label>
                <input
                    id='last_name'
                    name='last_name'
                    type='text'
                    placeholder="фамилия"
                    value={contacts.last_name}
                    onChange={(e) => {
                        contacts.last_name = e.target.value
                        setNewOrderData({ ...newOrderData, contacts })
                    }}
                    required
                />
            </section>

            <section>

                <label
                    htmlFor='phone'>
                    телефон
                </label>
                <input
                    id='phone'
                    name='phone'
                    placeholder="телефон"
                    type='tel'
                    value={contacts.phone}
                    onChange={(e) => {
                        contacts.phone = e.target.value
                        setNewOrderData({ ...newOrderData, contacts })
                    }}
                    required
                />
            </section>

            <section>
                <label
                    htmlFor='email'>
                    email
                </label>
                <input
                    id='email'
                    name='email'
                    placeholder="email"
                    type='email'
                    value={contacts.email}
                    onChange={(e) => {
                        contacts.email = e.target.value
                        setNewOrderData({ ...newOrderData, contacts })
                    }}
                    required
                />
            </section>
            </>


    );
}