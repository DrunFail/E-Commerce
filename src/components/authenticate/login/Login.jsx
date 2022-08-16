import styles from './Login.module.scss';

export default function Login() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h1 className={styles.title }>вход в личный кабинет</h1>
                <div>
                    <label htmlFor='username' >логин</label>
                    <input
                        type='text'
                        id='username'
                        autoComplete='off'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>пароль</label>
                    <input
                        type='password'
                        id='password'
                        required
                    />
                </div>
                <button>войти</button>
            </form>
        </div>
    );
}