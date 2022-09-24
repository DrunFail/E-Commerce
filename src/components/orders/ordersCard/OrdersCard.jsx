import styles from './OrdersCard.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import OrdersDetails from '../ordersDetails/OrdersDetails';

export default function OrdersCard({ order }) {
    const [visible, setVisible] = useState(false)
    const cart = useSelector(state => state.cart)

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div>
                    <p><span>Заказ:</span> {order.id}</p>
                    <p>от 14.08.2022</p>
                </div>
               
                
                <p><span>Получен: </span>{order.date}</p>
                <p><span>Сумма заказа: </span>{cart.reduce((sum, elem) => (sum += elem.price * elem.count), 0)} P</p>
                <p><span>Позиций:</span> {cart.length }</p>
                <a onClick={() => setVisible(!visible)} href='#'>{`<`}</a>
            </div>
            <div className={styles.block }>
                {visible && cart.map(elem =>
                    <OrdersDetails elem={elem} />

                )}

            </div>
           
            
            
        </div>
    );
}