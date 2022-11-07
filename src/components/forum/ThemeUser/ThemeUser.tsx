import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddMessage from '../AddMessage/AddMessage';
import { findTheme } from '../file';
import { Messages } from '../forumTypes';
import MessageList from '../MessageList/MessageList';
import styles from './ThemeUser.module.scss';


export default function ThemeUser() {
    const {forumId, themeId } = useParams();
    const arr = findTheme(forumId)
    const themes = arr?.themes
    if (themes === undefined) {
        throw new Error
    }
    const findThemeUser = themes.find(elem => elem.name_translit === themeId)
    const messages = findThemeUser?.messages

    const [listMessage, setListMessage] = useState(messages)
    
    return (
        <div className={styles.container}>
            <div className={styles.postInfo }>
                <h1 className={styles.title}>{findThemeUser?.name}</h1>
                <p>{findThemeUser?.value}</p>
            </div>
           
            <AddMessage listMessage={listMessage} setListMessage={setListMessage }/>
            <MessageList listMessage={listMessage }/>
           

        </div>
        
        );
}