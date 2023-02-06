import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import CartItem from './components/CartItem/CartItem';
import EmptyCart from './components/emptyCart/EmptyCart';
import { selectCart } from './redux/cartSlice';
import styles from './index.module.scss';


export default function CartList() {

    const cart = useAppSelector(selectCart)

    const totalPrice = cart.reduce((sum: number, elem: { price: number; count: number; }) => sum += Number(elem.price * elem.count), 0)

    return (

        <section className={styles.container}>
            <h1 className={styles.title}>корзина</h1>

            {!cart.length && <EmptyCart />}

            {!cart.length || <>
               
                {cart.map(elem =>
                    <CartItem
                        key={elem.id}
                        cartItem={elem}
                        cartItemId={elem.id}
                    />
                )}

                <p className={styles.total}>
                    Итого: {totalPrice}
                </p>

                <Link className={styles.link}
                    to='/order'
                >
                    перейти к оформлению заказа
                </Link>
            </>
            }
        </section>

    );
}