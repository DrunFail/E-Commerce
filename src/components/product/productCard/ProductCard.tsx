import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { addItemToCart } from '../../../redux/slices/cart/cartSlice';
import { addItemToCompare } from '../../../redux/slices/compare/compareSlice';
import { addItemToFavoriteProducts } from '../../../redux/slices/favorite/favoriteProductsSlice';
import CompareSvgComponent from '../../../ui/svgComponents/compare/CompareSvgComponent';
import FavoriteListSvgComponent from '../../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import styles from './ProductCard.module.scss';


interface ProductCardProps {
    smart: {
        name: string,
        nameTranslit: string,
        image: string,
        propertiesPortion: {
            name: string,
            value: string
        }[]
    }
}


export default function ProductCard({ smart }: ProductCardProps) {
    const { propertiesPortion } = smart;

    const location = useLocation();
    const dispatch = useAppDispatch();



    return (
        <div className={styles.container} >
            <img
                src={`http://img.mvideo.ru/${smart.image}`}
                alt='product image'
            />
            <a
                className={styles.productTitle}
                href={`${location.pathname}/${smart.nameTranslit}`}
            >
                {smart.name}
            </a>
            <div className={styles.mainProperties}>
                {propertiesPortion.map((properties: { name: string, value: string }, index: number) =>
                    <p
                        key={index}>
                        {properties.name}:  <span>{properties.value}</span>
                    </p>
                )}
            </div>


            <div className={styles.headerButtons}>
                <button 
                    onClick={() => dispatch(addItemToFavoriteProducts({
                        id: nanoid(),
                        title: smart.name,
                        img: `http://img.mvideo.ru/${smart.image}`,
                        link: `${location.pathname}/${smart.nameTranslit}`

                    }


                    ))}

                ><FavoriteListSvgComponent /></button>
                <button 
                    onClick={() => dispatch(addItemToCompare({
                        id: nanoid(),
                        title: smart.name,
                        img: `http://img.mvideo.ru/${smart.image}`,
                        link: `${location.pathname}/${smart.nameTranslit}`,


                    }))} ><CompareSvgComponent /></button>


            </div>

            <div className={styles.cart}>
                <button onClick={() => dispatch(addItemToCart({
                    id: nanoid(),
                    title: smart.name,
                    count: 1,
                    price: 5000
                }))}
                >В корзину
                </button>
            </div>
        </div>
    );
}