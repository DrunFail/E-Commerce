import React from 'react';
import CartSvgComponent from '../../ui/svgComponents/cart/CartSvgComponent';
import CompareSvgComponent from '../../ui/svgComponents/compare/CompareSvgComponent';
import FavoriteListSvgComponent from '../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import HomeSvgComponent from '../../ui/svgComponents/home/HomeSvgComponent';
import styles from './MobileNavbar.module.scss';


export default function MobileNavbar() {
    return (
        <div className={styles.container}>
            <HomeSvgComponent />
            <FavoriteListSvgComponent />
            <CartSvgComponent />
            <CompareSvgComponent />

        </div>
        );
}