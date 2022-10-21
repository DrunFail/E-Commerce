import React from 'react';
import styles from './ForumThemeCard.module.scss';

type Messages = {
    id: number,
    value: string,
    author: string,
    date_create: string
}


type Elem = {
    id: string,
    name: string,
    name_translit: string,
    value: string,
    create: string,
    date_create: string,
    messages: Messages[]

}

interface ForumThemeCardProps {
    elem: Elem
}


export default function ForumThemeCard({elem }: ForumThemeCardProps) {
    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <a className={styles.title} href={`/forum/${elem.name_translit}`}>{elem.name }</a>
                <div className={styles.creator }>
                    <p>создано: {elem.create }</p>
                    <p>дата: {elem.date_create}</p>
                </div>
            </div>
            <div className={styles.footer}>
                <p>последнее сообщение от: {elem.messages.at(-1)?.author }</p>
                <p>дата: {elem.messages.at(-1)?.date_create}</p>
            </div>
        </div>
    );
}