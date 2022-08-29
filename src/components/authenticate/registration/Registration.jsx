import styles from './Registration.module.scss';
import { Link } from 'react-router-dom';

export default function Registration() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h1 className={styles.title}> регистрация</h1>

                <label htmlFor='first_name'>имя</label>
                <input
                    type='text'
                    id='first_name'
                    placeholder='имя' />
                <label htmlFor='last_name'>фамилия</label>
                <input
                    type='text'
                    id='last_name'
                    placeholder='фамилия' />
                <label htmlFor='email'>почта</label>
                <input
                    type='email'
                    id='email'
                    placeholder='почта' />
                <label htmlFor='phone'>телефон</label>
                <input
                    type='tel'
                    id='phone'
                    placeholder='телефон' />
                <label htmlFor='password'>пароль</label>
                <input
                    type='password'
                    id='password'
                    placeholder='пароль' />
                <label htmlFor='repeat_password'>повторить пароль</label>
                <input
                    type='password'
                    id='repeat_password'
                    placeholder='повторите пароль' />
                <button>зарегистрироваться</button>
                <Link to='/login'>есть аккаунт? войти</Link>
            </form>
        </div>
    );
}