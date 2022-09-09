import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.scss';

export default function EmptyCart() {
    return (
        <div className={styles.container } >
            <p>В Вашей  корзине пока ничего нет.</p>
            <Link to='/'>вернуться на главную</Link>
        </div>
        );
}