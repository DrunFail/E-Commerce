import React from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantityItemsAmount, decrementQuantityItems, incrementQuantityItems, deleteItemFromCart } from '../../../redux/slices/cart/cartSlice';
import DeleteSvgComponent from '../../../ui/svgComponents/delete/DeleteSvgComponent';
import styles from './CartItem.module.scss';

interface CartListProps {
    cartItem: ShoppingCartItem,
    cartItemId: string
}

export default function CartList({ cartItem, cartItemId }: CartListProps) {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <img src={process.env.PUBLIC_URL + `/cat.jpeg`} />

            <p className={styles.title}>{cartItem.title} </p>

            <p className={styles.price}>{cartItem.price} </p>

            <div className={styles.count}>

                <button
                    onClick={() => dispatch(decrementQuantityItems(cartItemId))} >
                    -
                </button>

                <input
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
                {cartItem.count * cartItem.price}
            </p>
            <button
                onClick={() => dispatch(deleteItemFromCart(cartItemId))}>
                <DeleteSvgComponent />
            </button>
        </div>
    );
}