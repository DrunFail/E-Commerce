import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
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
        <div className={styles.productCard} >

            <img
                
                src={`http://img.mvideo.ru/${smart.image}`}
                alt='image'
            />
            <div className={styles.container}>
                <a
                    href={`${location.pathname}/${smart.nameTranslit}`}
                     >
                    {smart.name}
                </a>

                {propertiesPortion.map((properties: {name: string, value: string}, index: number) =>
                    <p key={index}>{properties.name}:  <span className={styles.prop}>{properties.value}</span> </p>
                )}


                <div className={styles.buttons}>

                    <button onClick={() => dispatch(addItemToCart({
                        id: nanoid(),
                        title: smart.name,
                        count: 1,
                        price: 5000
                    }))}
                        >в корзину
                    </button>

                    <button className={styles.icons}
                        onClick={() => dispatch(addItemToFavoriteProducts({
                            id: nanoid(),
                            title: smart.name,
                            img: `http://img.mvideo.ru/${smart.image}`,
                            link: `${location.pathname}/${smart.nameTranslit}`
                            
                        }


                        ))}

                    ><FavoriteListSvgComponent /></button>
                    <button className={styles.icons}
                        onClick={() => dispatch(addItemToCompare({
                            id: nanoid(),
                            title: smart.name,
                            img: `http://img.mvideo.ru/${smart.image}`,
                            link: `${location.pathname}/${smart.nameTranslit}`,
                            

                        }))} ><CompareSvgComponent /></button>
                </div>
            </div>
        </div>
    );
}