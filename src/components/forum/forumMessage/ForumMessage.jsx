import styles from './ForumMessage.module.scss';

export default function ForumMessage({ listMessages }) {
    return (
        <div className={styles.wrapper }>
            <p className={styles.header }>сообщения</p>
            {listMessages.map(message =>
                    <div key={message.id} className={styles.container}>
                        <div>
                            <p>{message.author}</p>
                            <p>{message.date_create}</p>
                        </div>
                        <div>
                            <p className={styles.value}>{message.value}</p>
                        </div>
                    </div>)}
        </div>
    );
}