import { useSelector } from 'react-redux';
import FavoriteProductsCard from '../FavoriteProductsCard/FavoriteProductsCard';
import styles from './FavoriteProductsList.module.scss';
import EmptyFavoriteProducts from '../emptyFavoriteProducts/EmptyFavoriteProducts';

export default function FavoriteProductsList() {
    const favorite = useSelector(state => state.favorite)
    

    return (
        <div className={styles.container }>
            <h1>избранные товары</h1>
            {favorite && <EmptyFavoriteProducts /> }
            {favorite.map(product => <FavoriteProductsCard key={product.id} product={product } />) }
        </div>
        );
}