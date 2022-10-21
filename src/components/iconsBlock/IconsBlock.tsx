import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectCart } from '../../redux/slices/cart/cartSlice';
import { selectCompare } from '../../redux/slices/compare/compareSlice';
import { selectFavorite } from '../../redux/slices/favorite/favoriteProductsSlice';
import CartSvgComponent from '../../ui/svgComponents/cart/CartSvgComponent';
import CompareSvgComponent from '../../ui/svgComponents/compare/CompareSvgComponent';
import FavoriteListSvgComponent from '../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import styles from './IconsBlock.module.scss';

export default function IconsBlock() {
    const cart = useAppSelector(selectCart)
    const favorite = useAppSelector(selectFavorite)
    const compare = useAppSelector(selectCompare)

    return (
        <div className={styles.container }>
            <Link to='cart'><CartSvgComponent /><span>{cart.length }</span>   </Link>
            <Link to='favorite'> <FavoriteListSvgComponent /><span>{favorite.length}</span> </Link>
            <Link to='compare'><CompareSvgComponent /><span>{compare.length}</span>  </Link>
        </div>
        );
}