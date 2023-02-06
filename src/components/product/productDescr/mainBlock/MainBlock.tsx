import React from 'react';
import { useDispatch } from 'react-redux';
import CompareSvgComponent from '../../../../ui/svgComponents/compare/CompareSvgComponent';
import FavoriteListSvgComponent from '../../../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import styles from './MainBlock.module.scss';
import { useLocation } from 'react-router-dom';
import { addCartItem } from '../../../cart/redux/cartSlice';
import { addFavoriteItem } from '../../../favoriteProducts/redux/favoriteProductsSlice';
import { addCompareItem } from '../../../compare/redux/compareSlice';


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
                <button
                    onClick={() =>
                        dispatch(addCartItem(name, price = '5000'
                        ))
                    }>
                    в корзину
                </button>
                <button
                    onClick={() => dispatch(addFavoriteItem(
                        name,
                        undefined,
                        pathname
                    ))}
                    className={styles.icons}>
                    {<FavoriteListSvgComponent />}
                </button>
                <button onClick={() => dispatch(addCompareItem)} className={styles.icons} >{<CompareSvgComponent />}</button>
            </div>
        </div>
    );

}


