import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import users from '../../../data/users.json';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState(
        {
            username: '',
            password: ''

        });

    const checkUser = () => {
        const checkResult = users.find(user => user.username === loginData.username && 
            user.password === loginData.password)
        if (checkResult) {
            localStorage.setItem('user', true);
            window.location.reload()
           
            setLoginData({
                username: '',
                password: ''

            })
            
          
        }
    }

    return (
        <div className={styles.container}>

            <form  className={styles.form}>
                <h1 className={styles.title}>вход в личный кабинет</h1>
                <div>
                    <label htmlFor='username' >логин</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        placeholder='введите логин'
                        required
                        value={loginData.username}
                        onChange={(e) => setLoginData({...loginData, username: e.target.value}) }
                    />
                </div>
                <div>
                    <label htmlFor='password'>пароль</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='введите пароль'
                        required
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value}) }
                    />
                </div>
                <button type='submit'
                    onClick={checkUser }                >войти</button>
                <Link to='/registration'>нет аккаунта? зарегистрироваться</Link>
            </form>

        </div>
    );
}