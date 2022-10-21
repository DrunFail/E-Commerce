import React from 'react';
import styles from './PaymentStep.module.scss';

type NewOrderData = {
    contacts: {
        name: string,
        last_name: string,
        phone: string,
        email: string
    },
    delivery: {
        delivery_method: string,
        delivery_shop: string,
        city: string,
        street: string,
        home: string,
        home2: string,
        home3: string,
    },

    payment: string,
    order: {
        id: string,
        title: string,
        count: number,
        price: number
    } | {
        id: string,
        title: string,
        count: number,
        price: number
    }[]
}




interface PaymentStepProps {
    payment: string,
    newOrderData: NewOrderData,
    setNewOrderData: any
}



export default function PaymentStep({payment, newOrderData, setNewOrderData }: PaymentStepProps) {
   

    return (
        <fieldset  onChange={(e: React.FormEvent<HTMLFieldSetElement>) => {
            setNewOrderData({ ...newOrderData, payment: (e.target as HTMLFieldSetElement).id })
        }}
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
                {payment === 'card' && <p className={styles.alert }>обратите внимание, что при выбранном методе оплаты получить заказ может только указанный получателем человек при предъявлении документа, удостоверяющего личность</p> }
            </div>
            <div>

            <input required type="radio" id='credit' value='credit' name="payment" />
            <label htmlFor="credit">в кредит</label>
            </div>
            <div>

            <input type="radio" id='yandex' value='yandex' name="payment" />
            <label htmlFor="yandex">yandex</label>
            </div>
        </fieldset>
        );
}