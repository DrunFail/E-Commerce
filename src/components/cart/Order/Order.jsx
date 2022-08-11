import styles from './Order.module.scss';

export default function Order() {
    return (
        <div className={styles.container} >
            <h1 className={styles.title}>Оформление заказа</h1>
            
            <input className={styles.fname }placeholder="name" />
            <input className={styles.lname }placeholder="last name" />
            <input className={styles.phone }placeholder="phone" />
            <input className={styles.email } placeholder="email" />
            <button className={styles.confirm }>подтвердить заказ</button>
        </div>
    );
}