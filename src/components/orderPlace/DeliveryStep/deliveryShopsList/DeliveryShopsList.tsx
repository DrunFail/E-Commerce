import React from 'react';
import shopsList from '../../../../data/shopsList.json';
import { DeliveryData, OrderData } from '../../interfaces/interfaces';
import DeliveryShopsCard from '../deliveryShopsCard/DeliveryShopsCard';
import styles from './DeliveryShopsList.module.scss';


interface DeliveryShopsListProps {
    delivery: DeliveryData,
    newOrderData: OrderData,
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