import styles from './CartList.module.scss';
import { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EmptyCart from '../emptyCart/EmptyCart';

export default function CartList() {

    const [total, setTotal] = useState(0);
    const cart = useSelector(state => state.cart)
    

    useEffect(() => {
        let totalPrice = cart.reduce((sum, elem) => sum += Number(elem.price * elem.count), 0)
        setTotal(totalPrice)
    }, [cart])




    return (

        <div className={styles.container}>
            <h1 className={styles.title}>корзина</h1>

            {!cart.length && <EmptyCart />}

            {!cart.length || <>
                <div className={styles.header }>
                    <p>photo</p>
                    <p>name</p>
                    <p>price</p>
                    <p>count</p>
                    <p>total</p>
                    <p></p>
                    
                    
                </div>
                {cart.map((elem) =>
                    <CartItem
                        key={elem.id}
                        elem={elem}
                        cart={cart}
                        id={elem.id}
                    />
                )}

                <p className={styles.total}>
                    Итого: {total}
                </p>

                <Link className={styles.link}
                    to='/order'
                >
                    перейти к оформлению заказа
                </Link>
            </>
            }
        </div>

    );
}