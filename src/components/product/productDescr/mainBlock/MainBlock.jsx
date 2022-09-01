import styles from './MainBlock.module.scss';
import { ReactComponent as FavSvg } from '../../../../assets/svg/favorite.svg';
import { ReactComponent as CompareSvg } from '../../../../assets/svg/compare.svg'; 
import { addFavorite } from '../../../../redux/slices/favorite/favoriteSlice';
import { addCompare } from '../../../../redux/slices/compare/compareSlice';
import { useDispatch } from 'react-redux';
import { addCart } from '../../../../redux/slices/cart/cartSlice';
import { nanoid } from '@reduxjs/toolkit';

export default function MainBlock({ name, price }) {
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <h1 >{name}</h1>
            <p >{price} P</p>
            <div className={styles.buttons}>
                <button onClick={() => dispatch(addCart({
                    id: nanoid(),
                    title: name,
                    count: 1,
                    price: 5000
                }))}>в корзину</button>
                <button onClick={() => dispatch(addFavorite({
                    id: nanoid(),
                    title: name
                })) } className={styles.icons}>{<FavSvg />}</button>
                <button onClick={() => dispatch(addCompare)} className={styles.icons} >{<CompareSvg /> }</button>
            </div>
        </div>
        );

}


