import React, { useState } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectCart } from '../../../redux/slices/cart/cartSlice';
import OrdersDetails from '../ordersDetails/OrdersDetails';
import styles from './OrdersCard.module.scss';

type Order = {
    id: number,
    position: {
        name: string,
        price: number,
        count: number
    }[],
    tPrice: number,
    date: string
}


interface OrderCardProps {
    order: Order
}


export default function OrdersCard({ order }: OrderCardProps) {
    const [visible, setVisible] = useState(false)
    const cart = useAppSelector(selectCart)

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div>
                    <p><span>Заказ:</span> {order.id}</p>
                    <p>от 14.08.2022</p>
                </div>
               
                
                <p><span>Получен: </span>{order.date}</p>
                <p><span>Сумма заказа: </span>{cart.reduce((sum: number, elem: { price: number; count: number; }) => (sum += elem.price * elem.count), 0)} P</p>
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