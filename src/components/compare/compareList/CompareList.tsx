import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectCompare } from '../../../redux/slices/compare/compareSlice';
import CompareCard from '../compareCard/CompareCard';
import EmptyCompare from '../emptyCompare/EmptyCompare';
import styles from './CompareList.module.scss';

export default function CompareList() {
    const compare = useAppSelector(selectCompare)
    return (
        <div className={styles.container }>
            <h1>список сравнения</h1>
            {!compare.length && <EmptyCompare />}
            <div>
                {compare.map(product =>
                    <CompareCard
                        key={product.id}
                        product={product}
                    />)}
            </div>
           
        </div>
        );
}