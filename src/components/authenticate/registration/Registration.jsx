import styles from './Registration.module.scss';

export default function Registration() {
    return (
        <div className={styles.container}>
            <form>
                <h1> регистрация</h1>
                <label>имя</label>
                <input type='text'/>
                <label>фамилия</label>
                <input type='text'/>
                <label>почта</label>
                <input type='email'/>
                <label>телефон</label>
                <input type='tel'/>
                <label>пароль</label>
                <input type='password'/>
                <label>повторить пароль</label>
                <input type='password'/>
                <button>зарегистрироваться</button>
            </form>
        </div>
    );
}