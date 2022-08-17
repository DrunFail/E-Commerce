import styles from './CartList.module.scss';
import { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function CartList() {
    
    const [total, setTotal] = useState(0);
    const cart = useSelector(state => state.cart)
    console.log(cart)

    useEffect(() => {
        let totalPrice = cart.reduce((sum, elem) => sum += Number(elem.price * elem.count), 0)
        setTotal(totalPrice)
        console.log(total)
    }, [cart])
   
    
    
  
    return (
        <div className={styles.container}>
            
            <h1 className={styles.title}>Cart</h1>
            {!cart.length && <p>empthy</p>}
            {cart.map((elem) => 
                <CartItem
                    key={elem.id}
                    elem={elem}
                    cart={cart }
                    
                    id={elem.id}
                />
                )}
            
            <p className={styles.total}>Итого: {total}</p>
            <a className={styles.link} href='cart/order'>create order</a>
        </div>
    );
}