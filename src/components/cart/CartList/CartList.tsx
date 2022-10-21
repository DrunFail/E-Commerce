import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import EmptyCart from '../emptyCart/EmptyCart';
import styles from './CartList.module.scss';
import { selectCart } from '../../../redux/slices/cart/cartSlice';



interface IElem {
    title: string,
    price: number,
    count: number,
    id: string
}



export default function CartList() {

    const [total, setTotal] = useState(0);
    const cart = useAppSelector(selectCart)
    

    useEffect(() => {
        let totalPrice = cart.reduce((sum: number, elem: { price: number; count: number; }) => sum += Number(elem.price * elem.count), 0)
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
                {cart.map((elem:IElem) =>
                    <CartItem
                        key={elem.id}
                        elem={elem}
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