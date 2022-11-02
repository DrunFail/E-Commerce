import React from 'react';
import styles from './MessageCard.module.scss';


type Messages = {
    id: number,
    value: string,
    author: string,
    date_create: string
}

interface MessageCardProps {
    message: Messages
}


export default function MessageCard({message }: MessageCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.photo }></div>
            <div>
                <p>{message.author}</p>
                <p>{message.date_create}</p>
            </div>
            <div>
                <p className={styles.value}>{message.value}</p>
            </div>
        </div>
        );
}