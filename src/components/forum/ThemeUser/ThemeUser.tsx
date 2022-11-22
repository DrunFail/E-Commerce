import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddMessage from '../AddMessage/AddMessage';
import { findTheme } from '../file';
import MessageList from '../MessageList/MessageList';
import styles from './ThemeUser.module.scss';


export default function ThemeUser() {
    const params = useParams();
    const { forumId, themeId } = params;

    if (forumId === undefined) {
        throw new Error('')
    }

    const arr = findTheme(forumId)
    const themes = arr?.themes
    if (themes === undefined) {
        throw new Error
    }
    const findThemeUser = themes.find(elem => elem.name_translit === themeId)
    const messages = findThemeUser?.messages

    if (messages === undefined) {
        throw new Error('')
    }

    const [listMessage, setListMessage] = useState(messages)

    const addMessage = (message: string): void => {
        const newMessage = {
            id: listMessage[listMessage.length - 1]?.id + 1 || 1,
            author: 'admin',
            value: message,
            date_create: Date.now()
        };
        setListMessage([...listMessage, newMessage])
    }



    
    return (
        <div className={styles.container}>
            <div className={styles.postInfo }>
                <h1 className={styles.title}>{findThemeUser?.name}</h1>
                <p>{findThemeUser?.value}</p>
            </div>
           
            <AddMessage
                addMessage={addMessage } />
            <MessageList
                listMessage={listMessage} />
           

        </div>
        
        );
}