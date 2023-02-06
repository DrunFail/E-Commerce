import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import CartSvgComponent from '../../ui/svgComponents/cart/CartSvgComponent';
import CompareSvgComponent from '../../ui/svgComponents/compare/CompareSvgComponent';
import FavoriteListSvgComponent from '../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import { selectCart } from '../cart/redux/cartSlice';
import { selectCompare } from '../compare/redux/compareSlice';
import { selectFavorite } from '../favoriteProducts/redux/favoriteProductsSlice';
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