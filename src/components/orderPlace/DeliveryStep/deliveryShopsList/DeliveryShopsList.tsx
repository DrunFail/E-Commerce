import React from 'react';
import shopsList from '../../../../data/shopsList.json';
import DeliveryShopsCard from '../deliveryShopsCard/DeliveryShopsCard';
import styles from './DeliveryShopsList.module.scss';





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

interface DeliveryShopsListProps {
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
    setNewOrderData:any
}



export default function DeliveryShopsList({delivery, newOrderData, setNewOrderData }: DeliveryShopsListProps) {
    return (
        <fieldset  onChange={(e: React.FormEvent<HTMLFieldSetElement>) => {
            delivery.delivery_shop = (e.target as HTMLFieldSetElement).id
            setNewOrderData({ ...newOrderData, delivery_shop: (e.target as HTMLFieldSetElement).id })
        }}
            className={styles.container}>
            <legend>выберите магазин</legend>
            {shopsList.map((shop) => <DeliveryShopsCard key={shop.id} shop={shop} /> ) }
            
        </fieldset>
        );
}