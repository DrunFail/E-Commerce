import styles from './ProductCard.module.scss';
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../../redux/slices/cart/cartSlice';
import { addFavorite } from '../../../redux/slices/favorite/favoriteSlice';
import { nanoid } from '@reduxjs/toolkit';
import { ReactComponent as FavoriteSvg } from '../../../assets/svg/favorite.svg';

export default function ProductCard({ smart }) {
    const { propertiesPortion } = smart;

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    

    return (
        <div className={styles.productCard} >
                      
            <img
                className={styles.product_img}
                src={`http://img.mvideo.ru/${smart.image}`}
                alt='image'
            />
            <div className={styles.container }>
                <a
                    href={`smartfony/${smart.nameTranslit}`}
                    className={styles.product_title} >
                    {smart.name}
                </a>
                
                {propertiesPortion.map((properties, index) => 
                    <p key={index}>{properties.name}:  <span className={styles.prop }>{properties.value}</span> </p>
                    )}

                
                
                <button onClick={() => dispatch(addCart({
                    id: nanoid(),
                    title: smart.name,
                    count: 1,
                    price: 5000
                }))}
                    className={styles.in_cart}>в корзину
                </button>

                <button onClick={() => dispatch(addFavorite({
                    id: nanoid(),
                    title: smart.name
                    
                }))}

                ><FavoriteSvg /></button>
            </div>
        </div>
    );
}