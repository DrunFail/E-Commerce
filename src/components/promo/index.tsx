import React, { useState } from 'react';
import promoList from '../../data/promoList.json';
import PromoCard from './components/promoCard/PromoCard';
import styles from './index.module.scss';

export default function PromoList() {
    const [promoListData] = useState<Promo[]>(promoList);


    return (
        <div className={styles.container }>
            <h1 className={styles.title}>Cписок акций</h1>
            {promoListData.map(promo =>
                <PromoCard
                    promo={promo}
                />)}
           
        </div>
        );
}