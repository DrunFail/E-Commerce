import { useState } from 'react';
import styles from './ProfileCard.module.scss';
import { Link } from 'react-router-dom';


export default function ProfileCard() {
    const [visible, setVisible] = useState(false);
    return (
        <div onClick={() => setVisible(!visible)} className={styles.container }>
            <img className={styles.profileImg} src={process.env.PUBLIC_URL + `/cat.jpeg`} alt='profile img' />
            <p className={styles.user }>User Name</p>
            <p className={styles.bonus}>1500 b.</p>
            <div className={styles[visible ? 'active' : 'offscreen'] }>
                <Link to='/orders'>заказы</Link>
                <Link to='/profile'>профиль</Link>
                <Link to=''>выйти</Link>
            </div>
            </div>
        );
}