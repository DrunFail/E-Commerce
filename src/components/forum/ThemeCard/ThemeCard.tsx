import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ThemeCard.module.scss';


interface ThemeCardProps {
    forumTheme: mainThemeTemplate
}


export default function ThemeCard({forumTheme }: ThemeCardProps) {
    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <Link
                    className={styles.title}
                    to={forumTheme.name_translit}>
                    {forumTheme.name}
                </Link>
            </div>
        </div>
    );
}