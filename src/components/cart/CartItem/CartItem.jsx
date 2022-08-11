import { useState } from 'react';
import styles from './CartItem.module.scss';

export default function CartList({ elem, data, setData, id }) {
    const [count, setCount] = useState(+elem.count);

    const nextCount = () => {
       
        setCount(prev => prev + 1)
        const update = data.map(dat => dat.id == id ? {...dat, count: count + 1} : dat)
       
        
        setData(update)
    }

    const prevCount = () => {
        count == 1 ? setCount(1) : setCount(prev => prev - 1)
        const update = data.map(dat => dat.id == id ? { ...dat, count: count - 1 } : dat)


        setData(update)
    }

    return (
        <div className={styles.container }>
            <p className={styles.photo }>photo</p>
            <p className={styles.title }>{elem.title}</p>
            <p className={styles.price}>{elem.price}</p>
            <div className={styles.count }>
            <button onClick={prevCount}>-</button>
            <p >{count}</p>
                <button onClick={nextCount}>+</button>
                </div>
            <p className={styles.total_price }>{count * elem.price }</p>
        </div>
        );
}