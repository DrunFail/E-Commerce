import React from 'react';
import { OrderData } from '../interfaces/interfaces';
import styles from './CheckoutOrder.module.scss';


interface CheckoutOrderProps {
    data: OrderData
}


export default function CheckoutOrder({ data }: CheckoutOrderProps) {

    return (
        <div className={styles.checkout} >
            <div  >
                <h3>контакты</h3>
                
                <p><span>Имя: </span> {data.name}</p>
                <p><span>Фамилия:</span> {data.last_name}</p>
                <p><span>телефон:</span> {data.phone}</p>
                <p><span>email:</span> {data.email}</p>
            </div>
            <div>
                <h3>способ оплаты</h3>
                <p>{data.payment}</p>
            </div>
            <div>
                <h3>получение заказа</h3>
                <p><span>метод получения</span> {data.delivery_method}</p>
                {data.delivery_method === 'shop' && <p><span>магазин</span> {data.delivery_shop}</p>}
                
                {data.delivery_method === 'delivery' && <>
                    <h4>доставка по адресу:</h4>
                    <p><span>город</span> {data.city}</p>
                    <p><span>улица</span> {data.street}</p>
                    <p><span>дом</span> {data.home}</p>
                    <p><span>подъезд</span> {data.home2}</p>
                    <p><span>квартира</span> {data.home3}</p>
                </>}
               
            </div>
        </div>
    );
}