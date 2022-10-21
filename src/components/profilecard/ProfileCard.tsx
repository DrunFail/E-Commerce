import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectUser } from '../../redux/slices/user/userSlice';
import styles from './ProfileCard.module.scss';


export default function ProfileCard() {
    const [visible, setVisible] = useState<boolean>(false);
    const user = useAppSelector(selectUser)
    const personalData = user.find(elem => elem.id === 1)

    if (typeof personalData === 'undefined') {
        throw new Error
    }

    const { data } = personalData
   
    return (
        <div onClick={() => setVisible(!visible)}
            className={styles[visible ? 'active-cont' : 'container']}>
            <img
                className={styles.profileImg}
                src={process.env.PUBLIC_URL + `/cat.jpeg`}
                srcSet={(
                    process.env.PUBLIC_URL + `/cat.jpeg 1080w`,
                    process.env.PUBLIC_URL + `/cat-small.jpg 480w`
                )}
                alt='profile img' />
            <p className={styles.user}>{data.map(elem => elem.value)}</p>
            <p className={styles.bonus}>1500 b.</p>
            <div className={styles[visible ? 'active' : 'offscreen']}>
                <Link to='/orders'>заказы</Link>
                <Link to='/profile'>профиль</Link>
                <a href='/' onClick={() => localStorage.clear()}>выйти</a>
            </div>
        </div>
    );
}