import styles from './CheckoutOrder.module.scss';

export default function CheckoutOrder({ contacts, payment, delivery }) {


    return (
        <div className={styles.checkout} >
            <div  >
                <h3>контакты</h3>
                
                <p><span>Имя: </span> {contacts.name}</p>
                <p><span>Фамилия:</span> {contacts.last_name}</p>
                <p><span>телефон:</span> {contacts.phone}</p>
                <p><span>email:</span> {contacts.email}</p>
            </div>
            <div>
                <h3>способ оплаты</h3>
                <p>{payment}</p>
            </div>
            <div>
                <h3>получение заказа</h3>
                <p><span>метод получения</span> {delivery.delivery_method}</p>
                {delivery.delivery_method === 'shop' && <p><span>магазин</span> {delivery.delivery_shop}</p>}
                
                {delivery.delivery_method === 'delivery' && <>
                    <h4>доставка по адресу:</h4>
                    <p><span>город</span> {delivery.city}</p>
                    <p><span>улица</span> {delivery.street}</p>
                    <p><span>дом</span> {delivery.home}</p>
                    <p><span>подъезд</span> {delivery.home2}</p>
                    <p><span>квартира</span> {delivery.home3}</p>
                </>}
               
            </div>
        </div>
    );
}