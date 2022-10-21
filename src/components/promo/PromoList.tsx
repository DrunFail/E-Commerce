import styles from './PromoList.module.scss';
import promoList from '../../data/promoList.json';
import PromoCard from './promoCard/PromoCard';
import React from 'react';

export default function PromoList() {
    return (
        <div className={styles.container }>
            <h1 className={styles.title}>Cписок акций</h1>
            {promoList.map(promo =>
                <PromoCard
                    promo={promo}
                />)}
           
        </div>
        );
}