import styles from './ShopsCard.module.scss';

export default function ShopsCard({ shop }) {
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
                className={styles.worhHours}>
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
                className={styles.phone}>
                <p>
                    {shop.phone}
                </p>
            </div>
        </div>
    )
}

