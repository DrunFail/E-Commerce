
import React, { SetStateAction,Dispatch, useState } from 'react';
import styles from './ForumAddMessage.module.scss';

type Messages = {
    id: number ,
    value: string,
    author: string,
    date_create: string
}

interface ForumAddMessageProps {
    listMessages: Messages[],
    setListMessages: Dispatch<SetStateAction<Messages[]>>
}

export default function ForumAddMessage({ listMessages, setListMessages }: ForumAddMessageProps) {
    const [message, setMessage] = useState('');


    const addMessage = () => {
        const newMessage = {
            id: listMessages[listMessages.length - 1]?.id + 1 || 1,
            author: 'admin',
            value: message,
            date_create: Date()
        };
        console.log(newMessage)
        setListMessages([...listMessages, newMessage])
        setMessage('')
    }

    return (
        <div className={styles.container }>
            <p className={styles.header}>добавить сообщение </p>
            <div className={styles.addForm }>
                <textarea value={message} onChange={(e) => setMessage(e.target.value) }/>
                <button onClick={addMessage }>send message</button>
            </div>
        </div>
    );
}