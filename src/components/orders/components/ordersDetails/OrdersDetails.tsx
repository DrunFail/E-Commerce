import React from 'react';
import styles from './OrdersDetails.module.scss';

type Elem = {
    title: string,
    price: number,
    count: number,
    id: string
}


interface OrdersDetailsProps {
    elem: Elem
}

export default function OrdersDetails({elem }: OrdersDetailsProps) {
    return (
        <div className={styles.container}>
            <img src={process.env.PUBLIC_URL + `/popProductImg/kama-small.jpg`} />
            <p className={styles.title}>{elem.title} </p>
            <p className={styles.price}>{elem.price} </p>
                <p> {elem.count}</p>
            <p className={styles.total_price}>{elem.count * elem.price}</p>
        </div>
    );
}