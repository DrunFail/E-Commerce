import styles from './ProfileCard.module.scss';

export default function ProfileCard() {
    return (
        <div className={styles.container }>
            <img className={styles.profileImg} src={process.env.PUBLIC_URL + `/cat.jpeg`} alt='profile img' />
            <p className={styles.user }>User Name</p>
            <p className={styles.bonus }>1500 b.</p>
            </div>
        );
}