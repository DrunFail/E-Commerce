import styles from './ForumAddMessage.module.scss';
import { useState } from 'react';

export default function ForumAddMessage({listMessages, setListMessages }) {
    const [message, setMessage] = useState('');

    const addMessage = () => {
        const newMessage = {
            id: listMessages.at(-1).id + 1,
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