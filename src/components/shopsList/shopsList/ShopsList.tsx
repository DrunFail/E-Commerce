import styles from './ShopsList.module.scss';
import shopsList from '../../../data/shopsList.json';
import ShopsCard from '../shopsCard/ShopsCard';
import React from 'react';

interface IShop {
   id: number,
    name: string,
    address: {
        city: string,
        street: string,
        dom: string,
        korpus: string | null
    },
    work_hours: {
       start: string,
        obed: {
            start: string,
            end: string
        },
        end: string
    },
    phone: string
}

export default function ShopsList() {
    return (
        <div className={styles.container}>
            <h1>Адреса магазинов</h1>
            {shopsList.map((shop: IShop) =>
                <ShopsCard
                    key={shop.id}
                    shop={shop}
                />)}
        </div>
    );
}