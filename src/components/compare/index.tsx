import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import CompareCard from './components/compareCard/CompareCard';
import EmptyCompare from './components/emptyCompare/EmptyCompare';
import { selectCompare } from './redux/compareSlice';
import styles from './index.module.scss';

export default function CompareList() {
    const compare = useAppSelector(selectCompare)
    return (
        <div className={styles.container }>
            <h1>список сравнения</h1>
            {!compare.length && <EmptyCompare />}
            <div className={styles.compareList}>
                {compare.map(product =>
                    <CompareCard
                        key={product.id}
                        product={product}
                    />)}
            </div>
               
        </div>
        );
}