import styles from './DeliveryForm.module.scss';

export default function DeliveryForm({ setStep }) {
    return (
        <div className={styles.container} >

            <label htmlFor="city">город</label>
            <input id='city'className={styles.fname} placeholder="город" />
            <label htmlFor="street">улица</label>
            <input id='street' className={styles.lname} placeholder="улица" />
            <label htmlFor='home'>дом</label>
            <input id='home' className={styles.phone} placeholder="дом" />
            <label htmlFor='home2'>подъезд</label>
            <input id='home2' className={styles.email} placeholder="подьезд" />
            <label htmlFor='home3'>квартира</label>
            <input id='home3' className={styles.email} placeholder="квартира" />

        </div>
        );
}