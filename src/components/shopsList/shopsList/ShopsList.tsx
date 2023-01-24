import React, { useState } from 'react';
import shopsList from '../../../data/shopsList.json';
import { Shop } from '../interfaces/interfaces';
import ShopsCard from '../shopsCard/ShopsCard';
import styles from './ShopsList.module.scss';


export default function ShopsList() {
    const [shopsListData] = useState<Shop[]>(shopsList)

    return (
        <div className={styles.container}>
            <h1>Адреса магазинов</h1>
            {shopsListData.map(shop =>
                <ShopsCard
                    key={shop.id}
                    shop={shop}
                />)}
        </div>
    );
}