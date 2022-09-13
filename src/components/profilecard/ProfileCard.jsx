import { useState } from 'react';
import styles from './ProfileCard.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function ProfileCard() {
    const [visible, setVisible] = useState(false);
    const user = useSelector(state => state.user)
    const personalData = user.find(elem => elem.id === 1)
    const {data } = personalData
    
    return (
        <div onClick={() => setVisible(!visible)}
            className={styles[visible ? 'active-cont' : 'container']}>
            <img className={styles.profileImg} src={process.env.PUBLIC_URL + `/cat.jpeg`} alt='profile img' />
            <p className={styles.user}>{data.map(elem => elem.value )}</p>
            <p className={styles.bonus}>1500 b.</p>
            <div className={styles[visible ? 'active' : 'offscreen'] }>
                <Link to='/orders'>заказы</Link>
                <Link to='/profile'>профиль</Link>
                <a href='/' onClick={() => localStorage.clear() }>выйти</a>
            </div>
            </div>
        );
}