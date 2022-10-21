import React from 'react';
import styles from './PaymentForm.module.scss';

export default function PaymentForm() {
    return (
        <form className={styles.container }>
            
            <section>
                <label htmlFor='card'>номер карты</label>
                <input
                    id='card'
                    name='card'
                    type='tel'
                    inputMode='numeric'
                    placeholder="номер карты"
                    required
                />
            </section>

           

            <section>
                <label htmlFor='owner'>владелец</label>
                <input
                    id='owner'
                    name='owner'
                    type='text'
                    placeholder="владелец"
                    required
                />
            </section>

            <section>
                <label htmlFor='expired'>срок действия</label>
                <input
                    id='expired'
                    name='expired'
                    type='tel'
                    inputMode='numeric'
                    placeholder="срок действия"
                    required />
            </section>

            <section>
                <label htmlFor='cvv'>cvv-код</label>
                <input
                    id='cvv'
                    name='cvv'
                    placeholder="cvv"
                    type='tel'
                    inputMode='numeric'
                    required
                />
            </section>

            <button>оплатить заказ</button>
            </form>
            



        
    );
}