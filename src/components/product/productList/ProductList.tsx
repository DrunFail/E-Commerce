import React, { useState } from 'react';
import mproducts from '../../../data/mproducts.json';
import ProductCard from './productCard/ProductCard';
import styles from './ProductList.module.scss';

export default function ProductList() {
    const [productList] = useState<ProductList[]>(mproducts);

    return (
        <div className={styles.container}>
            <section className={styles.list}>
                <h1>Смартфоны</h1>
                {productList.map((product, index) =>
                    <ProductCard
                        key={index}
                        product={product} />
                )
                }
            </section>
        </div>

    );
}