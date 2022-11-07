import React from 'react';
import { Link } from 'react-router-dom';
import { Elem } from '../forumTypes';
import styles from './ThemeCard.module.scss';


interface ThemeCardProps {
    elem: Elem
}


export default function ThemeCard({elem }: ThemeCardProps) {
    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <Link className={styles.title} to={elem.name_translit}>{elem.name }</Link>
            </div>
        </div>
    );
}