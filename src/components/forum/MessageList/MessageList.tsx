import React from 'react';
import MessageCard from '../MessageCard/MessageCard';
import styles from './MessageList.module.scss';


interface MessageListProps {
    listMessage: MessageForum[]
}


export default function MessageList({ listMessage }: MessageListProps) {
    return (
        <div className={styles.wrapper}>
            {listMessage.length === 0 &&
                <p
                    className={styles.header}>
                    Здесь еще нет комментариев. Будьте первым!
                </p>}

            {listMessage.map(message =>
                <MessageCard
                    key={message.id }
                    message={message}
                />
                )}
        </div>
    );
}