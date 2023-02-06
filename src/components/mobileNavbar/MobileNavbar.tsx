import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import CartSvgComponent from '../../ui/svgComponents/cart/CartSvgComponent';
import CompareSvgComponent from '../../ui/svgComponents/compare/CompareSvgComponent';
import FavoriteListSvgComponent from '../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import HomeSvgComponent from '../../ui/svgComponents/home/HomeSvgComponent';
import { selectCart } from '../cart/redux/cartSlice';
import { selectCompare } from '../compare/redux/compareSlice';
import { selectFavorite } from '../favoriteProducts/redux/favoriteProductsSlice';
import styles from './MobileNavbar.module.scss';


export default function MobileNavbar() {
    const cart = useAppSelector(selectCart);
    const compare = useAppSelector(selectCompare);
    const favoriteList = useAppSelector(selectFavorite);


    return (
        <div className={styles.container}>
            <Link to='/'><HomeSvgComponent /></Link>

            <Link to='favorite'>
                <FavoriteListSvgComponent />
                {favoriteList.length !== 0 &&
                    <span>
                        {favoriteList.length}
                    </span>
                }
            </Link>

            <Link to='cart'>
                <CartSvgComponent />
                {cart.length !== 0 &&
                    <span>
                        {cart.length}
                    </span>
                }
            </Link>

            <Link to='compare'>
                <CompareSvgComponent />
                {compare.length !== 0 &&
                    <span>
                        {compare.length}
                    </span>}
            </Link>

        </div>
    );
}