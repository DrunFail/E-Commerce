import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddTheme from '../AddTheme/AddTheme';
import ThemeCard from '../ThemeCard/ThemeCard';
import styles from './ThemeDetail.module.scss';
import { findTheme } from '../../file';


export default function ThemeDetail() {
    const [visibleAddThemeForm, setVisibleAddThemeForm] = useState(false)

    const { forumId } = useParams();
    if (forumId === undefined) {
        throw new Error('')
    }

    const closeAddThemeForm = (): void => {
        setVisibleAddThemeForm(false)
    }

    const findThem = findTheme(forumId);

    const themes = findThem.themes
    if (themes === undefined) {
        throw new Error('')
    }

    return (
        <div className={styles.container}>
            <h1>{findThem?.name}</h1>
            {findThem.allowNesting &&
                <button
                onClick={() => setVisibleAddThemeForm(true)}>
                Добавить новую тему
            </button>

}
            {visibleAddThemeForm && <AddTheme
                closeAddThemeForm={closeAddThemeForm }
            />}
            {themes.map(theme =>
                <ThemeCard
                    key={theme.id}
                    forumTheme={theme} />)
            }

        </div>
    );
}
