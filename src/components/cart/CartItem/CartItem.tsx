import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { changeQuantityItemsAmount, decrementQuantityItems, incrementQuantityItems, deleteItemFromCart } from '../../../redux/slices/cart/cartSlice';
import DeleteSvgComponent from '../../../ui/svgComponents/delete/DeleteSvgComponent';
import styles from './CartItem.module.scss';

interface CartListProps {
    cartItem: ShoppingCartItem,
    cartItemId: string
}

export default function CartList({ cartItem, cartItemId }: CartListProps) {
    const dispatch = useAppDispatch();

    return (
        <article className={styles.container}>
            <div className={styles.image }>
                <img src={process.env.PUBLIC_URL + `/cat.jpeg`} />
            </div>
            

            <p className={styles.title}>{cartItem.title} </p>


            <div className={styles.count}>

                <button
                    onClick={() => dispatch(decrementQuantityItems(cartItemId))} >
                    -
                </button>

                <input
                    type='tel'
                    value={cartItem.count}
                    onChange={(e) => {
                        const amount = +e.target.value
                        dispatch(changeQuantityItemsAmount({ cartItemId, amount }))
                    }
                    } />
                <button
                    onClick={() => dispatch(incrementQuantityItems(cartItemId))}>
                    +
                </button>
            </div>
            <p
                className={styles.totalPrice}>
                {`${cartItem.count * cartItem.price} P`}
            </p>
            <button
                onClick={() => dispatch(deleteItemFromCart(cartItemId))}>
                <DeleteSvgComponent />
            </button>
        </article>
    );
}