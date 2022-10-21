import React from 'react';
import styles from './Sort.module.scss';

export default function Sort() {
    return (
        <>
            <select className={styles.select }>
                <option>popular</option>
                <option>price </option>
                <option>name</option>
            </select>
            
        </>
        );
}