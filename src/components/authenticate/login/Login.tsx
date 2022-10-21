import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import users from '../../../data/users.json';
import styles from './Login.module.scss';


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
            const { cart, favorite, compare, info } = checkResult;
            localStorage.setItem('cart', JSON.stringify(cart))
            localStorage.setItem('compare', JSON.stringify(compare))
            localStorage.setItem('favorite', JSON.stringify(favorite))
            localStorage.setItem('userData', JSON.stringify(info))
            localStorage.setItem('user', JSON.stringify('true'));

            setLoginData({
                username: '',
                password: ''

            })
        }
    }

    return (



        <form
            onSubmit={(e) => e.preventDefault()}
            className={styles.form}>
            <h1
                className={styles.title}>
                вход в личный кабинет
            </h1>
            <section>
                <label
                    htmlFor='username' >
                    логин
                </label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    placeholder='введите логин'
                    required
                    value={loginData.username}
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                />
            </section>
            <section>
                <label
                    htmlFor='password'>
                    пароль
                </label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='введите пароль'
                    required
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
            </section>
            <button type='submit'
                onClick={checkUser}>
                войти
            </button>
            <Link
                to='/registration'>
                нет аккаунта? зарегистрироваться
            </Link>
        </form>
    );
}