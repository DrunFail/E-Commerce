import styles from './FavoriteProductsCard.module.scss';
import { removeItemFromFavoriteProducts } from '../../../redux/slices/favorite/favoriteProductsSlice';
import { Link } from 'react-router-dom';
import DeleteSvgComponent from '../../../ui/svgComponents/delete/DeleteSvgComponent';
import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';

type Favorite = {
    id: string,
    title: string,
    img: string,
    link: string
}



interface FavoriteProductsCardProps {
    product: Favorite
}


export default function FavoriteProductsCard({ product }: FavoriteProductsCardProps) {
    const dispatch = useAppDispatch()
    return (
        <div className={styles.container }>
            <img src={product.img } />
            <Link to={product.link }>{product.title}</Link>
            <button onClick={() => dispatch(removeItemFromFavoriteProducts(product.id)) }><DeleteSvgComponent /></button>
        </div>
        );
}