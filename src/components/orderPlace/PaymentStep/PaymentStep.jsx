import styles from './PaymentStep.module.scss';


export default function PaymentStep({payment, newOrderData, setNewOrderData }) {
   

    return (
        <fieldset  onChange={(e) => {
            console.log(e.target.value)
            setNewOrderData({ ...newOrderData, payment: e.target.value })
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