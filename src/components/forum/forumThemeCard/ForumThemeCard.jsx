import styles from './ForumThemeCard.module.scss';

export default function ForumThemeCard({elem }) {
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
                <p>последнее сообщение от: {elem.messages.at(-1).author }</p>
                <p>дата: {elem.messages.at(-1).date_create}</p>
            </div>
        </div>
    );
}