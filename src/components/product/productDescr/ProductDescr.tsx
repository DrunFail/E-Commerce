import React, { useState } from 'react';
import huawei from '../../../data/phones/huawei.json';
import ImageBlock from './imageBlock/imageBlock';
import MainBlock from './mainBlock/MainBlock';
import MenuChoices from './menuChoices/MenuChoices';
import styles from './ProductDescr.module.scss';


export default function ProductDescr() {
    const [productData] = useState<Product>(huawei)

    const { name, price } = productData.body
    const { key } = productData.body.properties
    const { all } = productData.body.properties
    const { imagesBig } = productData.body

    return (
        <div className={styles.container}>
            <ImageBlock
                images={imagesBig} />
            <MainBlock
                name={name}
                price={price} />
            <MenuChoices
                keys={key}
                all={all} />
        </div>
    );
}