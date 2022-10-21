import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { deleteCompare } from '../../../redux/slices/compare/compareSlice';
import styles from './CompareCard.module.scss';

type Compare = {
    id: string,
    title: string,
    img: string,
    link: string
}

interface CompareCardProps {
    product: Compare
}


export default function CompareCard({ product }: CompareCardProps) {
    const dispatch = useAppDispatch()
    return (
        <div className={styles.container }>
            <img src={product.img} alt={product.title } />
            <Link to={product.link}>{product.title}</Link>
            <button onClick={() => dispatch(deleteCompare(product.id)) }>delete</button>

        </div>
        
        );
}