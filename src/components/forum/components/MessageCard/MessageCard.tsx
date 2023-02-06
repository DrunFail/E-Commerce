import React from 'react';
import styles from './MessageCard.module.scss';


interface MessageCardProps {
    message: MessageForum
}


export default function MessageCard({ message }: MessageCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.author_info}>
                <div className={styles.photo}></div>
                <div className={styles.date }>
                    <p className={styles.author }>{message.author}</p>
                    <p>{message.date_create}</p>
                </div>
            </div>
            <div>
                <p className={styles.value}>{message.value}</p>
            </div>
        </div>
    );
}