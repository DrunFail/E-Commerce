import React from 'react';
import shopsList from '../../../../data/shopsList.json';
import { OrderData } from '../../interfaces/interfaces';
import DeliveryShopsCard from '../deliveryShopsCard/DeliveryShopsCard';
import styles from './DeliveryShopsList.module.scss';


interface DeliveryShopsListProps {
    data: OrderData,
    handleChangeFieldset: (e: React.FormEvent<HTMLFieldSetElement>) => void
}


export default function DeliveryShopsList({ data, handleChangeFieldset }: DeliveryShopsListProps) {
    return (
        <fieldset onChange={handleChangeFieldset}
            className={styles.container}>
            <legend>выберите магазин</legend>
            {shopsList.map((shop) => <DeliveryShopsCard key={shop.id} shop={shop} />)}

        </fieldset>
    );
}