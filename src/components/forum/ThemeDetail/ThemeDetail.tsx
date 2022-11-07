import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import forum from '../../../data/forum.json';
import AddTheme from '../AddTheme/AddTheme';
import ThemeCard from '../ThemeCard/ThemeCard';
import styles from './ThemeDetail.module.scss';


export default function ThemeDetail() {
    const [visibleAddThemeForm, setVisibleAddThemeForm] = useState(false)
    const params = useParams();


    const findTheme = forum.find(elem => elem.name_translit === params.forumId)
    

    const themes = findTheme?.themes

    
    console.log(themes)

    if (themes === undefined) {
        throw new Error
    }
   


    return (
        <div className={styles.container}>
            <h1>{findTheme?.name}</h1>
            <button
                onClick={() => setVisibleAddThemeForm(!visibleAddThemeForm)}>
                Добавить новую тему
            </button>
            {visibleAddThemeForm && <AddTheme
                visibleAddThemeForm={visibleAddThemeForm}
                setVisibleAddThemeForm={setVisibleAddThemeForm }
            />}
            {themes.map(theme =>
                <ThemeCard
                    key={theme.id}
                    elem={theme} />)
            }

        </div>
    );
}
