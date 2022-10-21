import React from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantityItemsAmount, decrementQuantityItems, incrementQuantityItems, deleteItemFromCart } from '../../../redux/slices/cart/cartSlice';
import DeleteSvgComponent from '../../../ui/svgComponents/delete/DeleteSvgComponent';
import styles from './CartItem.module.scss';

interface IElem {
    title: string,
    price: number,
    count: number
}
interface IProps {
    elem: IElem,
    id: string
}

export default function CartList({ elem, id }: IProps) {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <img src={process.env.PUBLIC_URL + `/cat.jpeg`} />

            <p className={styles.title}>{elem.title} </p>

            <p className={styles.price}>{elem.price} </p>

            <div className={styles.count}>

                <button onClick={() => dispatch(decrementQuantityItems(id))} >-</button>

                <input
                    value={elem.count}
                    onChange={(e) => {
                        const amount = +e.target.value
                        dispatch(changeQuantityItemsAmount({ id, amount }))
                    }
                    } />
                <button onClick={() => dispatch(incrementQuantityItems(id))}>+</button>
            </div>
            <p className={styles.total_price}>{elem.count * elem.price}</p>
            <button onClick={() => dispatch(deleteItemFromCart(id))}><DeleteSvgComponent /></button>
        </div>
    );
}