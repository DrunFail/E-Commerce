import styles from './PaymentForm.module.scss';

export default function PaymentForm({ setStep }) {
    return (
        <div className={styles.container} >

            <label htmlFor='card'>номер карты</label>
            <input id='card' className={styles.fname} placeholder="номер карты" />
            <label htmlFor='expired'>срок действия</label>
            <input id='expired' className={styles.lname} placeholder="срок действия" />
            <label htmlFor='owner'>владелец</label>
            <input id='owner' className={styles.phone} placeholder="владелец" />
            <label htmlFor='cvv'>cvv-код</label>
            <input id='cvv' className={styles.email} placeholder="cvv" />


        </div>
        );
}