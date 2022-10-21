import React from 'react';
import styles from './ShopsCard.module.scss';

interface IShop {
    id: number,
    name: string,
    "address": {
        city: string,
        street: string,
        dom: string,
        korpus: string | null
    },
    "work_hours": {
        start: string,
        "obed": {
            start: string,
            end: string
        },
        end: string
    },
    phone: string
}


interface IProps {
    shop: IShop
}

export default function ShopsCard({ shop }: IProps) {
    return (
        <div
            className={styles.wrapper}>
            <div
                className={styles.addressBlock}>
                <h2
                    className={styles.shopName}>
                    {shop.name}
                </h2>
                <p
                    className={styles.address}>
                    {shop.address.city},
                    {shop.address.street},
                    {shop.address.dom},
                    {shop.address.korpus}
                </p>
            </div>
            <div
                >
                <p>
                    Часы работы:
                    {shop.work_hours.start} - {shop.work_hours.end}
                </p>
                <p>
                    Перерыв:
                    {shop.work_hours.obed.start} - {shop.work_hours.obed.end}
                </p>
            </div>
            <div
                >
                <p>
                    {shop.phone}
                </p>
            </div>
        </div>
    )
}

