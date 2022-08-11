import styles from './CartList.module.scss';
import { useState } from 'react';
import cart from '../../../data/cart.json';
import CartItem from '../CartItem/CartItem';
import { useEffect } from 'react';

export default function CartList() {
    const [data, setData] = useState(cart);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalPrice = data.reduce((sum, elem) => sum += Number(elem.price * elem.count), 0)
        setTotal(totalPrice)
        console.log(total)
    }, [data])
   
    
    
  
    return (
        <div className={styles.container }>
            <h1 className={styles.title}>Cart</h1>
            {cart.map((elem, index) => 
                <CartItem
                    key={index}
                    elem={elem}
                    data={data}
                    setData={setData}
                    id={elem.id }
                />
                )}
            
            <p className={styles.total}>Итого: {total}</p>
            <a className={styles.link} href='cart/order'>create order</a>
        </div>
    );
}