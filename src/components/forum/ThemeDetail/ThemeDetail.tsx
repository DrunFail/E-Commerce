import React from 'react';
import { useParams } from 'react-router-dom';
import forum from '../../../data/forum.json';
import ThemeCard from '../ThemeCard/ThemeCard';
import styles from './ThemeDetail.module.scss';


export default function ThemeDetail() {
    const params = useParams();


    const findTheme = forum.find(elem => elem.name_translit === params.forumId)
    

    const themes  = findTheme?.themes

    if (themes === undefined) {
        throw new Error
    }
   


    return (
        <div className={styles.container}>
            <h1>{findTheme?.name }</h1>
            {themes.map(theme =>
                <ThemeCard
                    key={theme.id}
                    elem={theme} />)
            }

        </div>
    );
}
