import styles from './PhoneRegistration.module.scss';

export default function PhoneRegistration() {
    return (
        <section className={styles.container}>
            <label htmlFor='phone'>Номер телефона</label>
            <input
                type='tel'
                id='phone'
                name='phone'
                required
            />

        </section>
    );
}