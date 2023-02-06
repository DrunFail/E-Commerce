import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import EmptyFavoriteProducts from '../emptyFavoriteProducts/EmptyFavoriteProducts';
import FavoriteProductsCard from '../FavoriteProductsCard/FavoriteProductsCard';
import { selectFavorite } from '../redux/favoriteProductsSlice';
import styles from './FavoriteProductsList.module.scss';

export default function FavoriteProductsList() {
    const favorite = useAppSelector(selectFavorite)
    

    return (
        <div className={styles.container }>
            <h1>избранные товары</h1>
            {!favorite.length && <EmptyFavoriteProducts />}
            
                {favorite.map(product =>
                    <FavoriteProductsCard
                        key={product.id}
                        product={product} />)}
            
            
        </div>
        );
}