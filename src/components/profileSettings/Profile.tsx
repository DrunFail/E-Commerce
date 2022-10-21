import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectUser } from '../../redux/slices/user/userSlice';
import styles from './Profile.module.scss';
import ProfilePersonal from './profilePersonal/ProfilePersonal';


export default function Profile() {
    const user = useAppSelector(selectUser)

    return (
        <div className={styles.container}>
            <h1> Настройки профиля</h1>
            <div className={styles.block}>
                {user.map(elem =>
                    <>
                        <h2>{elem.name}</h2>
                        <ProfilePersonal elem={elem} />
                    </>)}
            </div>


        </div>
    );
}