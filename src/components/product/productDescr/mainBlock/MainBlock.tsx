import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../../redux/slices/cart/cartSlice';
import { addItemToCompare } from '../../../../redux/slices/compare/compareSlice';
import { addItemToFavoriteProducts } from '../../../../redux/slices/favorite/favoriteProductsSlice';
import CompareSvgComponent from '../../../../ui/svgComponents/compare/CompareSvgComponent';
import FavoriteListSvgComponent from '../../../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import styles from './MainBlock.module.scss';
import { useLocation } from 'react-router-dom';


interface MainBlockProps {
    name: string,
    price: string
}


export default function MainBlock({ name, price }: MainBlockProps) {
    const dispatch = useDispatch();
    const location = useLocation();
    const { pathname } = location;
    return (
        <div className={styles.container}>
            <h1 id='title'>{name}</h1>
            <p >{price} P</p>
            <div className={styles.buttons}>
                <button onClick={() => dispatch(addItemToCart({
                    id: nanoid(),
                    title: name,
                    count: 1,
                    price: 5000
                }))}>в корзину</button>
                <button onClick={() => dispatch(addItemToFavoriteProducts({
                    id: nanoid(),
                    title: name,
                    link: pathname
                    
                })) } className={styles.icons}>{<FavoriteListSvgComponent />}</button>
                <button onClick={() => dispatch(addItemToCompare)} className={styles.icons} >{<CompareSvgComponent /> }</button>
            </div>
        </div>
        );

}


