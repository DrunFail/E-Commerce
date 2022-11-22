import React from 'react';
import { Link } from 'react-router-dom';
import CartSvgComponent from '../../ui/svgComponents/cart/CartSvgComponent';
import CompareSvgComponent from '../../ui/svgComponents/compare/CompareSvgComponent';
import FavoriteListSvgComponent from '../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import HomeSvgComponent from '../../ui/svgComponents/home/HomeSvgComponent';
import styles from './MobileNavbar.module.scss';


export default function MobileNavbar() {
    return (
        <div className={styles.container}>
            <Link to='/'><HomeSvgComponent /></Link>
            <Link to='favorite'><FavoriteListSvgComponent /></Link>
            <Link to='cart'><CartSvgComponent /></Link>
            <Link to='compare'><CompareSvgComponent /></Link>

        </div>
        );
}