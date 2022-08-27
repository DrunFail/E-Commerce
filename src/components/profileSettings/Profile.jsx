import styles from './Profile.module.scss';

export default function Profile() {
    return (
        <div className={styles.container}>
            <h1> Profile settings</h1>
            <div className={styles.wrapper}>
                <h2>персональная информация</h2>
                <div>
                    <p>image</p>
                    <p>имя</p>
                    <p>фамилия</p>

                </div>
               

            </div>
            <div className={styles.contacts}>
                <h2>contacts</h2>
                <div>
                    <p>телефон</p>
                    <p>email</p>

                </div>
            </div>
            <div className={styles.security }>
                <h2>безопасность</h2>
                <div>
                <p>изменить пароль</p>

                </div>


            </div>


        </div>
    );
}