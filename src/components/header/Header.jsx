import IconsBlock from "../iconsBlock/IconsBlock";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import ProfileCard from "../profilecard/ProfileCard";
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header }>
            <Logo />
            <Navbar />
            <IconsBlock />
            <ProfileCard />
        </header>
    );
}