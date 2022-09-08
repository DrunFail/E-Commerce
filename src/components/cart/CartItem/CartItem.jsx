import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { deleteCart, changeCountIncr, changeCountDecr, changeCountAmount } from '../../../redux/slices/cart/cartSlice';
import { ReactComponent as DeleteSvg } from '../../../assets/svg/delete.svg';

export default function CartList({ elem, id }) {
    const dispatch = useDispatch();

    return (
        <div className={styles.container }>
            <img src={process.env.PUBLIC_URL + `/cat.jpeg`} />

            <p className={styles.title}>{elem.title} </p>

            <p className={styles.price}>{elem.price} </p>

            <div className={styles.count}>

                <button onClick={() => dispatch(changeCountDecr(id))} >-</button>

                <input
                    value={elem.count}
                    onChange={(e) => {
                        const amount = +e.target.value
                        dispatch(changeCountAmount({id, amount}))
                    }
                } />
                <button onClick={() => dispatch(changeCountIncr(id)) }>+</button>
                </div>
            <p className={styles.total_price}>{elem.count * elem.price}</p>
            <button onClick={() => dispatch(deleteCart(id))}><DeleteSvg /></button>
        </div>
        );
}