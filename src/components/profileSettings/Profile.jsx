import styles from './Profile.module.scss';
import { useSelector } from 'react-redux';
import ProfilePersonal from './profilePersonal/ProfilePersonal';


export default function Profile() {
    const userData = useSelector(state => state.user)
    
    return (
        <div className={styles.container}>
            <h1> Настройки профиля</h1>
            <div className={styles.block }>
                {userData.map(elem => <>
                    <h2>{elem.name}</h2>
                    <ProfilePersonal elem={elem} />
                </>)}
            </div>
            

        </div>
    );
}