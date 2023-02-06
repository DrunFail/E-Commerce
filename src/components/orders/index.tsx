import React from 'react';
import orders from '../../data/orders.json';
import OrdersCard from './components/ordersCard/OrdersCard';
import styles from './index.module.scss';

export default function OrdersList() {
    return (
        <div className={styles.container}>
            
            <h1>список заказов</h1>
            {orders.map(order => 
                <OrdersCard key={order.id} order={order }/>
                )}
            
            </div>
        );
}