import React from 'react';
import styles from './MessageCard.module.scss';


type Messages = {
    id: number,
    value: string,
    author: string,
    date_create: Date
}

interface MessageCardProps {
    message: Messages
}


export default function MessageCard({ message }: MessageCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.author_info}>


                <div className={styles.photo}></div>
                <div className={styles.date }>
                    <p className={styles.author }>{message.author}</p>
                    <p>{message.date_create.toLocaleDateString()}</p>
                    <p>{message.date_create.toLocaleTimeString()}</p>
                </div>
            </div>
            <div>
                <p className={styles.value}>{message.value}</p>
            </div>
        </div>
    );
}