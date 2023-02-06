import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import CompareSvgComponent from '../../../../ui/svgComponents/compare/CompareSvgComponent';
import FavoriteListSvgComponent from '../../../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import styles from './ProductCard.module.scss';
import { addCartItem, deleteCartItem, selectCart } from '../../../cart/redux/cartSlice';
import { addFavoriteItem } from '../../../favoriteProducts/redux/favoriteProductsSlice';
import { addCompareItem } from '../../../compare/redux/compareSlice';


interface ProductCardProps {
    product: ProductList
}


export default function ProductCard({ product }: ProductCardProps) {
    const { propertiesPortion } = product;
    const price = '5000';
    const location = useLocation();
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCart)
    const checkCart = cart.find(item => item.title === product.name)

    return (
        <article className={styles.container} >
            <img
                src={`http://img.mvideo.ru/${product.image}`}
                alt={product.name}
            />

            <Link
                className={styles.productTitle}
                to={`${location.pathname}/${product.nameTranslit}`}
            >
                {product.name}
            </Link>

            <div className={styles.details}>
                {propertiesPortion.map((properties, index: number) =>
                    <p
                        key={index}>
                        {properties.name}:  <span>{properties.value}</span>
                    </p>
                )}
            </div>


            <div className={styles.headerButtons}>

                <div className={styles.cart}>
                    {checkCart
                        ? <button className={styles.delete}
                            onClick={() => dispatch(deleteCartItem(checkCart.id))}
                        >
                            Убрать
                        </button>

                        : <button className={styles.add}
                            onClick={() => dispatch(addCartItem(
                                product.name,
                                price
                            ))}
                        >
                            Добавить
                        </button>
                    }

                </div>

                <button
                    onClick={() => dispatch(addFavoriteItem(
                        product.name,
                        `http://img.mvideo.ru/${product.image}`,
                        `${location.pathname}/${product.nameTranslit}`

                    ))}

                ><FavoriteListSvgComponent /></button>
                <button
                    onClick={() => dispatch(addCompareItem(
                        product.name,
                        `http://img.mvideo.ru/${product.image}`,
                        `${location.pathname}/${product.nameTranslit}`,

                    ))} >
                    <CompareSvgComponent />
                </button>

            </div>

        </article>
    );
};
