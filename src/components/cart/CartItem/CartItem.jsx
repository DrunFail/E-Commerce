import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { deleteCart, changeCountIncr, changeCountDecr } from '../../../redux/slices/cart/cartSlice';


export default function CartList({ elem, id }) {
    const dispatch = useDispatch();

    return (
        <div className={styles.container }>
            <p className={styles.photo }>photo</p>
            <p className={styles.title }>{elem.title}</p>
            <p className={styles.price}>{elem.price}</p>
            <div className={styles.count }>
                <button onClick={() => dispatch(changeCountDecr(id)) } >-</button>
            <p >{elem.count}</p>
                <button onClick={() => dispatch(changeCountIncr(id)) }>+</button>
                </div>
            <p className={styles.total_price}>{elem.count * elem.price}</p>
            <button onClick={() => dispatch(deleteCart(id )) }>delete</button>
        </div>
        );
}