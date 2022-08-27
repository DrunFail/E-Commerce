import OrdersCard from '../ordersCard/OrdersCard';
import styles from './OrdersList.module.scss';
import orders from '../../../data/orders';

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