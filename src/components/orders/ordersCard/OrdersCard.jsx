import styles from './OrdersCard.module.scss';
import { useState } from 'react';

export default function OrdersCard({ order }) {
    const[visible, setVisible] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.main }>
                <p>номер заказа: {order.id}</p>
                <p>сумма заказа: {order.tPrice}</p>
                <p>дата получения: {order.date}</p>
                <a onClick={() => setVisible(!visible)} href='#'>подробнее</a>
            </div>
            
                {order.position.map(elem =>
                    < div className = { styles[visible ? 'details' : 'offscreen'] }>
                        <p>{elem.name}</p>
                        <p>количество</p>
                        <p>цена</p>
                        
                        </div>
                    
                    )}
               
            
            
        </div>
    );
}