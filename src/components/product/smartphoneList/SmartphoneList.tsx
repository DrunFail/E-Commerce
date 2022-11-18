import React from 'react';
import mproducts from '../../../data/mproducts.json';
import FilterPropertie from '../../../ui/filter/filterProperties/FilterPropertie';
import Sort from '../../../ui/filter/sort/Sort';
import ProductCard from '../../product/productCard/ProductCard';
import styles from './SmartphoneList.module.scss';

export default function SmartphoneList() {
    const width = document.documentElement.clientWidth

    return (
        <div className={styles.main}>
            {width <= 500 || <>
                <Sort />

            </>
            }
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {
                        mproducts.map((smart, index) =>
                            <ProductCard
                                key={index}
                                smart={smart} />
                        )
                    }
                </div>
                <FilterPropertie />
            </div>

        </div>
    );
}