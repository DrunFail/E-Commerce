import React from 'react';
import forum from '../../../data/forum.json';
import ForumThemeCard from '../ThemeCard/ThemeCard';
import styles from './ThemeList.module.scss';

export default function ThemeList() {
    return (
        <div className={styles.container}>
            <h1>Форум</h1>
            {forum.map(elem =>
                <ForumThemeCard
                    key={elem.id}
                    elem={elem}
                />
            )}
        </div>
    );
}