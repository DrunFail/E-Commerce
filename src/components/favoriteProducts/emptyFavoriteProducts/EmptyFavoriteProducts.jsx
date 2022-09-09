import { Link } from 'react-router-dom';
import styles from './EmptyFavoriteProducts.module.scss';

export default function EmptyFavoriteProducts() {
    return (
        <div className={styles.container} >
            <p>Вы ничего не добавили в избранные товары.</p>
            <Link to='/'>вернуться на главную</Link>
        </div>
        );
}