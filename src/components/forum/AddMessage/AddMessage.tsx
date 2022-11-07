import React, { SetStateAction,Dispatch, useState } from 'react';
import { Messages } from '../forumTypes';
import styles from './AddMessage.module.scss';

interface AddMessageProps {
    listMessage: any,
    setListMessage: any
}


export default function AddMessage({listMessage, setListMessage }: AddMessageProps) {
    const [message, setMessage] = useState('');


    const addMessage = () => {
        let date = new Date()
        const newMessage = {
            id: listMessage[listMessage.length - 1]?.id + 1 || 1,
            author: 'admin',
            value: message,
            date_create: date
        };
        setListMessage([...listMessage, newMessage])
        setMessage('')
    }

    return (
        <div className={styles.container }>
            <form
                className={styles.addForm}
                onSubmit={(e) => e.preventDefault() }
            >
                <div>
               

                <textarea
                    id='newMessage'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
</div>
                <button
                    onClick={addMessage}
                >
                    отправить
                </button>

            </form>
        </div>
    );
}