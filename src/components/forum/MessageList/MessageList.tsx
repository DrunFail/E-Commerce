import React from 'react';
import { Messages } from '../forumTypes';
import MessageCard from '../MessageCard/MessageCard';
import styles from './MessageList.module.scss';


interface MessageListProps {
    listMessage: any
}


export default function MessageList({ listMessage }: MessageListProps) {
    

    return (
        <div className={styles.wrapper}>
            
            {listMessage.length == 0 &&
                <p className={styles.header}>Здесь еще нет комментариев. Будьте первым!</p>}

            {listMessage.map((message: { id: React.Key | null | undefined; }) =>
                <MessageCard
                    key={message.id }
                    message={message}
                />
                )}
        </div>
    );
}