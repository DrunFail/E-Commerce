import { Link } from 'react-router-dom';
import styles from './SuccessOrder.module.scss';

export default function SuccessOrder({cash }) {
    return (
        
        <div className={styles.container }>
            <p>ваш заказ успешно оформлен  и принят в обработку.</p>

            {cash === 'card' &&
                <>
                <Link to='/payment'>перейти к оплате</Link>
                </>}

            {cash !== 'card' && <>
                <Link to='/'>на главную страницу</Link>
            </>}
           
        </div>);
}