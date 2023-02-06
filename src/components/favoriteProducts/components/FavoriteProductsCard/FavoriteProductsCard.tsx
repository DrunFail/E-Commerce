import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/hooks';
import DeleteSvgComponent from '../../../../ui/svgComponents/delete/DeleteSvgComponent';
import { removeFavoriteItem } from '../../redux/favoriteProductsSlice';
import styles from './FavoriteProductsCard.module.scss';


interface FavoriteProductsCardProps {
    product: FavoriteProductItem
}


export default function FavoriteProductsCard({ product }: FavoriteProductsCardProps) {
    const dispatch = useAppDispatch()
    return (
        <div className={styles.container}>
            <img src={product.img} alt='product image'/>
            <Link to={product.link}>{product.title}</Link>
            <button
                onClick={() => dispatch(removeFavoriteItem(product.id))}>
                <DeleteSvgComponent />
            </button>
        </div>
    );
}