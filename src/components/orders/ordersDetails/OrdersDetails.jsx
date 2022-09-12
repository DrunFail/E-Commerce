import styles from './OrdersDetails.module.scss';

export default function OrdersDetails({elem }) {
    return (
        <div className={styles.container}>
            <img src={process.env.PUBLIC_URL + `/cat.jpeg`} />
            <p className={styles.title}>{elem.title} </p>
            <p className={styles.price}>{elem.price} </p>
                <p> {elem.count}</p>
            <p className={styles.total_price}>{elem.count * elem.price}</p>
        </div>
    );
}