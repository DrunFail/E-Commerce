import React, { SetStateAction,Dispatch, useState } from 'react';
import { Messages } from '../forumTypes';
import styles from './AddMessage.module.scss';



interface AddMessageProps {
    listMessages: Messages[],
    setListMessages: Dispatch<SetStateAction<Messages[] | []>>
}

export default function AddMessage({ listMessages, setListMessages }: AddMessageProps) {
    const [message, setMessage] = useState('');


    const addMessage = () => {
        let date = new Date()
        const newMessage = {
            id: listMessages[listMessages.length - 1]?.id + 1 || 1,
            author: 'admin',
            value: message,
            date_create: date
        };
        setListMessages([...listMessages, newMessage])
        setMessage('')
    }

    return (
        <div className={styles.container }>
            <form
                className={styles.addForm}
                onSubmit={(e) => e.preventDefault() }
            >

                <label
                    htmlFor='newMessage'
                >
                    Написать сообщение
                </label>

                <textarea
                    id='newMessage'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button
                    onClick={addMessage}
                >
                    отправить
                </button>

            </form>
        </div>
    );
}