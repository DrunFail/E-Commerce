import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className={styles.container}>
            
            <form className={styles.form}>
                <h1 className={styles.title}>вход в личный кабинет</h1>
                <div>
                    <label htmlFor='username' >логин</label>
                    <input
                        type='text'
                        id='username'
                        autoComplete='off'
                        placeholder='введите логин'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>пароль</label>
                    <input
                        type='password'
                        id='password'
                        placeholder='введите пароль'
                        required
                    />
                </div>
                <button>войти</button>
                <Link to='/registration'>нет аккаунта? зарегистрироваться</Link>
            </form>
            
        </div>
    );
}