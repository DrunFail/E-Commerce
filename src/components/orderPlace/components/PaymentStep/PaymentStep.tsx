import React from 'react';
import { OrderData } from '../../interfaces/interfaces';
import styles from './PaymentStep.module.scss';


interface PaymentStepProps {
    data: OrderData,
    handleChangeFieldset: (e: React.FormEvent<HTMLFieldSetElement>) => void
}


export default function PaymentStep({ data, handleChangeFieldset }: PaymentStepProps) {

    return (
        <fieldset onChange={handleChangeFieldset}
            className={styles.PaymentMethod}>

            <legend>выберите метод оплаты:</legend>

            <div>
                <input
                    required
                    defaultChecked
                    type="radio"
                    id='cash'
                    value='cash'
                    name="payment" />
                <label htmlFor="cash">наличными или картой при получении</label>
            </div>

            <div>
                <input
                    type="radio"
                    id='card'
                    value='card'
                    name="payment" />
                <label htmlFor='card'>картой онлайн</label>
                {data.payment === 'card' &&
                    <p className={styles.alert}>
                        обратите внимание, что при выбранном методе оплаты
                        получить заказ может только указанный получателем
                        человек при предъявлении документа, удостоверяющего
                        личность
                    </p>}
            </div>

            <div>
                <input
                    required
                    type="radio"
                    id='credit'
                    value='credit'
                    name="payment" />
                <label htmlFor="credit">в кредит</label>
            </div>

            <div>
                <input
                    type="radio"
                    id='yandex'
                    value='yandex'
                    name="payment" />
                <label htmlFor="yandex">yandex</label>
            </div>

        </fieldset>
    );
}