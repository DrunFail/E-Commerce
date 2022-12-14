import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmailRegistration from './emailRegistr/EmailRegistration';
import PhoneRegistration from './phoneRegistration/PhoneRegistration';
import styles from './Registration.module.scss';


export default function Registration() {
    const [method, setMethod] = useState('emailMethod');

    return (
        <div>
            <form className={styles.form}>
                <h1 className={styles.title}> регистрация</h1>
                <fieldset onChange={(e) => setMethod((e.target as HTMLInputElement).value)}>
                    <legend>выберите способ регистрации</legend>
                    <div>
                        <input
                            type='radio'
                            id='emailMethod'
                            value='emailMethod'
                            name='methodRegistration'
                            defaultChecked
                        />
                        <label htmlFor='emailMethod'>электронная почта</label>

                        <input
                            type='radio'
                            id='phoneMethod'
                            value='phoneMethod'
                            name='methodRegistration'
                        />
                        <label htmlFor='phoneMethod'>телефон</label>
                    </div>
                   
                </fieldset>
                {method === 'phoneMethod' && <PhoneRegistration />}
                {method === 'emailMethod' && <EmailRegistration/> }
               
                <button type='submit'>зарегистрироваться</button>
                <Link to='/login'>есть аккаунт? войти</Link>
            </form>
        </div>
    );
}