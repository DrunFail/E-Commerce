import React from 'react';
import styles from './ForumMessage.module.scss';

type Messages = {
    id: number,
    value: string,
    author: string,
    date_create: string
}

interface ForumMessageProps {
    listMessages: Messages[]
}


export default function ForumMessage({ listMessages }: ForumMessageProps) {
    return (
        <div className={styles.wrapper }>
            <p className={styles.header }>сообщения</p>
            {listMessages.map(message =>
                    <div key={message.id} className={styles.container}>
                        <div>
                            <p>{message.author}</p>
                            <p>{message.date_create}</p>
                        </div>
                        <div>
                            <p className={styles.value}>{message.value}</p>
                        </div>
                    </div>)}
        </div>
    );
}