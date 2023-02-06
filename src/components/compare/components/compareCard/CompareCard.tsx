import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/hooks';
import { CompareItem } from '../../interfaces/interfaces';
import { removeCompareItem } from '../../redux/compareSlice';
import styles from './CompareCard.module.scss';


interface CompareCardProps {
    product: CompareItem
}


export default function CompareCard({ product }: CompareCardProps) {
    const dispatch = useAppDispatch()
    return (
        <div className={styles.container }>
            <img src={product.img} alt={product.title } />
            <Link to={product.link}>{product.title}</Link>
            <button onClick={() => dispatch(removeCompareItem(product.id)) }>delete</button>

        </div>
        
        );
}