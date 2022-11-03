import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import forum from '../../../data/forum.json';
import ForumAddMessage from '../AddMessage/ForumAddMessage';
import { Messages } from '../forumTypes';
import ForumMessage from '../MessageList/ForumMessage';
import styles from './ThemeDetail.module.scss';


export default function ForumThemeDetail() {
    const params = useParams();


    const findTheme = forum.find(elem => elem.name_translit === params.forumId)
    if (typeof findTheme === 'undefined') {
        throw new Error
    }

    const { messages } = findTheme
    const { allowComment } = findTheme
    const [listMessages, setListMessages] = useState<Messages[] | []>(messages)


    return (
        <div className={styles.container}>
            <div>
                <div>

                    <p>создано: {findTheme.create}</p>
                    <p>дата: {findTheme.date_create}</p>
                </div>

                <h1
                    id='title'
                    className={styles.title}>
                    {findTheme.name}
                </h1>
            </div>
            <p className={styles.value}>{findTheme.value}</p>
            <div>

                <ForumMessage
                    listMessages={listMessages}
                />

                {allowComment &&
                    <ForumAddMessage
                        listMessages={listMessages}
                        setListMessages={setListMessages} />

                }
            </div>

        </div>
    );
}