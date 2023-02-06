import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EmptyCompare.module.scss';

export default function EmptyCompare() {
    return (
        <div className={styles.container} >
            <p>Вы не добавили в список еще ни одного товара.</p>
            <Link to='/'>вернуться на главную</Link>
        </div>
    );
}