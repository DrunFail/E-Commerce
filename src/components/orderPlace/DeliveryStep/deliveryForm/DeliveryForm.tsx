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

interface DeliveryFormProps {
    delivery: {
        delivery_method: string,
        delivery_shop: string,
        city: string,
        street: string,
        home: string,
        home2: string,
        home3: string,
    },
    newOrderData: NewOrderData,
    setNewOrderData: any
}



export default function DeliveryForm({delivery, newOrderData, setNewOrderData }: DeliveryFormProps) {
    return (
        <>
            <section>
                <label htmlFor="city">город</label>
                <input
                    id='city'
                    name='city'
                    type='text'
                    placeholder="город"
                    value={delivery.city}
                    onChange={(e) => {
                        delivery.city = e.target.value
                        setNewOrderData({ ...newOrderData, delivery })
                    }}
                    required
                />
            </section>
            <section>

                <label htmlFor="street">улица</label>
                <input
                    id='street'
                    name='street'
                    type='text'
                    placeholder="улица"
                    value={delivery.street}
                    onChange={(e) => {
                        delivery.street = e.target.value
                        setNewOrderData({ ...newOrderData, delivery })
                    }}
                    required
                />
            </section>
            <section>

                <label htmlFor='home'>дом</label>
                <input
                    id='home'
                    name='home'
                    type='tel'
                    inputMode='numeric'
                    placeholder="дом"
                    value={delivery.home}
                    onChange={(e) => {
                        delivery.home = e.target.value
                        setNewOrderData({ ...newOrderData, delivery })
                    }}
                    required
                />
            </section>
            <section>

                <label htmlFor='home2'>подъезд</label>
                <input
                    id='home2'
                    name='home2'
                    type='tel'
                    inputMode='numeric'
                    placeholder="подьезд"
                    value={delivery.home2}
                    onChange={(e) => {
                        delivery.home2 = e.target.value
                        setNewOrderData({ ...newOrderData, delivery })
                    }}
                    required
                />
            </section>
            <section>

                <label htmlFor='home3'>квартира</label>
                <input
                    id='home3'
                    name='home3'
                    type='tel'
                    inputMode='numeric'
                    placeholder="квартира"
                    value={delivery.home3}
                    onChange={(e) => {
                        delivery.home3 = e.target.value
                        setNewOrderData({ ...newOrderData, delivery })
                    }}
                />
            </section>
        </>
        );
}