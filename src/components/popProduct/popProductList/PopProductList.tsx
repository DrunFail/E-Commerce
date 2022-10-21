import React from 'react';
import popProduct from '../../../data/popProduct.json';
import PopProductCard from '../popProductCard/PopProductCard';
import styles from './PopProductList.module.scss';

export default function PopProduct() {
    return (
        <div className={styles.container}>
            <h1>популярные товары</h1>
            {popProduct.map((product, index) =>
                <PopProductCard key={index} product={product} />)}
        </div>
    );
}