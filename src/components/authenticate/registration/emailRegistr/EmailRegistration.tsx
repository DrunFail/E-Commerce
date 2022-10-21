import React from 'react';
import styles from './EmailRegistration.module.scss';

export default function EmailRegistration() {
    return (
        <section className={styles.container}>
            <label htmlFor='email'>email</label>
            <input
                type='email'
                id='email'
                name='email'
                required
            />
        </section>
    );
}