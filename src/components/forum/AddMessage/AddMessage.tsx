import React, { useState } from 'react';
import styles from './AddMessage.module.scss';

interface AddMessageProps {
    addMessage: (message: string) => void
}


export default function AddMessage({ addMessage }: AddMessageProps) {
    const [message, setMessage] = useState('');

    return (
        <div className={styles.container}>
            <form
                className={styles.addForm}
                onSubmit={(e) => e.preventDefault()}
            >
                <div>
                    <textarea
                        id='newMessage'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button
                    onClick={() => {
                        addMessage(message);
                        setMessage('')
                    }}
                >
                    отправить
                </button>
            </form>
        </div>
    );
}