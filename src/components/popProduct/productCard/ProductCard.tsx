import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addItemToCompare, deleteItemFromCompare, selectCompare } from '../../../redux/slices/compare/compareSlice';
import CartSvgComponent from '../../../ui/svgComponents/cart/CartSvgComponent';
import CompareSvgComponent from '../../../ui/svgComponents/compare/CompareSvgComponent';
import FavoriteListSvgComponent from '../../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import { addCartItem, deleteCartItem, selectCart } from '../../cart/redux/cartSlice';
import { addFavoriteItem, removeFavoriteItem, selectFavorite } from '../../favoriteProducts/redux/favoriteProductsSlice';
import styles from './ProductCard.module.scss';


interface ProductCardProps {
    product: PopProduct
}

export default function ProductCard({ product }: ProductCardProps) {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCart);
    const favorite = useAppSelector(selectFavorite);
    const compare = useAppSelector(selectCompare);

    const checkCart = cart.find(item => item.title === product.title);
    const checkFavorite = favorite.find(item => item.title === product.title);
    const checkCompare = compare.find(item => item.title === product.title);

    const handleClickEventCart = () => {
        if (!checkCart) {
            return dispatch(addCartItem(
                product.title,
                product.price
            ))
        }
        return dispatch(deleteCartItem(checkCart.id))
    }

    const handleClickEventFavorite = () => {
        if (!checkFavorite) {
            return dispatch(addFavoriteItem(
                product.title,
                process.env.PUBLIC_URL + `${product.img}-small.jpg`,
                product.link
            ))
        }
        return dispatch(removeFavoriteItem(checkFavorite.id))
    }

    const handleClickEventCompare = () => {
        if (!checkCompare) {
            return dispatch(addItemToCompare({
                id: nanoid(),
                title: product.title,
                link: product.link,
                img: process.env.PUBLIC_URL + `${product.img}-small.jpg`
            }))
        }
        return dispatch(deleteItemFromCompare(checkCompare.id))
    }



    return (
        <>

            <div className={styles.container}>
                <img
                    alt={product.title}
                    src={process.env.PUBLIC_URL + `${product.img}.jpg`}
                    srcSet={(process.env.PUBLIC_URL + `${product.img}.jpg` + ` 1080w`,
                        process.env.PUBLIC_URL + `${product.img}-small.jpg` + ` 480w`
                    )}

                />
                <Link

                    to={product.link}
                >
                    <p className={styles.titleProduct}>{product.title}</p>
                </Link>
                <p>{`${product.price} P`}</p>
                <div className={styles.buttons}>

                    <div>
                        <span
                            className={styles[checkCompare ? 'active' : 'non-active']}
                            onClick={handleClickEventCompare}
                        >
                            <CompareSvgComponent />
                        </span>


                        <span
                            className={styles[checkFavorite ? 'active' : 'non-active']}
                            onClick={handleClickEventFavorite}
                        >
                            <FavoriteListSvgComponent />
                        </span>
                    </div>
                    <button
                        aria-label="add to cart"
                        onClick={handleClickEventCart}>

                        {checkCart ? 'added' : <CartSvgComponent />}
                    </button>

                </div>

            </div>

        </>
    );
}