import React from 'react';
import { Messages } from '../forumTypes';
import MessageCard from '../MessageCard/MessageCard';
import styles from './Message.module.scss';


interface ForumMessageProps {
    listMessages: Messages[]
}


export default function ForumMessage({ listMessages }: ForumMessageProps) {
    return (
        <div className={styles.wrapper}>

            {listMessages.length !== 0 &&
                <p className={styles.header}>сообщения</p>}

            {listMessages.map(message=>
                <MessageCard
                    key={message.id }
                    message={message}
                />
                )}
        </div>
    );
}