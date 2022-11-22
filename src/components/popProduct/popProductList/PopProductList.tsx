import React, { useState } from 'react';
import popProduct from '../../../data/popProduct.json';
import PopProductCard from '../popProductCard/PopProductCard';
import styles from './PopProductList.module.scss';

export default function PopProduct() {
    const [productList] = useState<PopProduct[]>(popProduct);

    return (
        <section className={styles.container}>
            <h1>популярные товары</h1>
            {productList.map((product, index) =>
                <PopProductCard key={index} product={product} />)}
        </section>
    );
}