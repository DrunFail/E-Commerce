import React, { useState } from 'react';
import mproducts from '../../../data/mproducts.json';
import FilterPropertie from '../../../ui/filter/filterProperties/FilterPropertie';
import Sort from '../../../ui/filter/sort/Sort';
import ProductCard from './productCard/ProductCard';
import styles from './ProductList.module.scss';

export default function ProductList() {
    const width = document.documentElement.clientWidth;
    const [productList] = useState<ProductList[]>(mproducts);

    return (
        <div className={styles.main}>
            {width <= 500 || <>
                <Sort />

            </>
            }
            <div className={styles.container}>
                <div className={styles.cardList}>
                    {
                        productList.map((product, index) =>
                            <ProductCard
                                key={index}
                                product={product} />
                        )
                    }
                </div>
                {width <= 500 || <FilterPropertie />  } 
            </div>

        </div>
    );
}