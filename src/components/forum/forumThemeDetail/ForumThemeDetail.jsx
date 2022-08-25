import forum from '../../../data/forum.json';
import { useParams } from 'react-router-dom';
import styles from './ForumThemeDetail.module.scss';
import ForumMessage from '../forumMessage/ForumMessage';
import ForumAddMessage from '../forumAddMessage/ForumAddMessage';
import { useState } from 'react';

export default function ForumThemeDetail() {
    const params = useParams();
    
    
    const findTheme = forum.find(elem => elem.name_translit === params.forumId)
    const { messages } = findTheme
    const [listMessages, setListMessages] = useState(messages)
    

    return (
        <div className={styles.container }>
            <h1 className={styles.title }>тема: {findTheme.name}</h1>
            <p>создано: {findTheme.create}</p>
            <p>дата: {findTheme.date_create }</p>
            <p className={styles.value }>{findTheme.value}</p>
            <div>
                
                <ForumMessage listMessages={listMessages}
                    setListMessages={setListMessages }                />
               
                <ForumAddMessage listMessages={listMessages}
                    setListMessages={setListMessages }                />
            </div>

        </div>
    );
}