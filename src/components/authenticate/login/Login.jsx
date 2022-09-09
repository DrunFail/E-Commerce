import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import users from '../../../data/users.json';


export default function Login() {

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
      
            
            
            <form  className={styles.form}>
                <h1 className={styles.title}>вход в личный кабинет</h1>
                <section>
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
                </section>
                <section>
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
                </section>
                <button type='submit'
                    onClick={checkUser }                >войти</button>
                <Link to='/registration'>нет аккаунта? зарегистрироваться</Link>
            </form>
       
       
    );
}