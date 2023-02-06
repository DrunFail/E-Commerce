import React, { useState } from 'react';
import forum from '../../../../data/forum.json';
import ThemeCard from '../ThemeCard/ThemeCard';
import styles from './ThemeList.module.scss';

export default function ThemeList() {
    const [forumThemeList] = useState<ForumTheme[]>(forum);
    return (
        <div className={styles.container}>
            <h1>Форум</h1>
            {forumThemeList.map(forumTheme =>
                <ThemeCard
                    key={forumTheme.id}
                    forumTheme={forumTheme}
                />
            )}
        </div>
    );
}