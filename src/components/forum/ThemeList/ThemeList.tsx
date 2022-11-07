import React from 'react';
import forum from '../../../data/forum.json';
import ThemeCard from '../ThemeCard/ThemeCard';
import styles from './ThemeList.module.scss';

export default function ThemeList() {
    return (
        <div className={styles.container}>
            <h1>Форум</h1>
            {forum.map(elem =>
                <ThemeCard
                    key={elem.id}
                    elem={elem}
                />
            )}
        </div>
    );
}