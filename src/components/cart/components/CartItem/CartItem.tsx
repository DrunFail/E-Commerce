import React from 'react';
import { useAppDispatch } from '../../../../redux/hooks';
import DeleteSvgComponent from '../../../../ui/svgComponents/delete/DeleteSvgComponent';
import { changeQuantityCartItem, decrementCartItem, deleteCartItem, incrementCartItem } from '../../redux/cartSlice';
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
                    onClick={() => dispatch(decrementCartItem(cartItemId))} >
                    -
                </button>

                <input
                    type='tel'
                    value={cartItem.count}
                    onChange={(e) => {
                        const amount = +e.target.value
                        dispatch(changeQuantityCartItem({ cartItemId, amount }))
                    }
                    } />
                <button
                    onClick={() => dispatch(incrementCartItem(cartItemId))}>
                    +
                </button>
            </div>
            <p
                className={styles.totalPrice}>
                {`${cartItem.count * cartItem.price} P`}
            </p>
            <button
                onClick={() => dispatch(deleteCartItem(cartItemId))}>
                <DeleteSvgComponent />
            </button>
        </article>
    );
}