import IconsBlock from "../iconsBlock/IconsBlock";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import ProfileCard from "../profilecard/ProfileCard";
import styles from './Header.module.scss';

export default function Header() {
    
     const check = localStorage.getItem('user')
      
    
    

    return (
        <header className={styles.header }>
            <Logo />
            <Navbar />
            <IconsBlock />
            {check === 'true' && <ProfileCard />}
            {check === 'true' || <a href='/login'>sign in</a>}
        </header>
    );
}