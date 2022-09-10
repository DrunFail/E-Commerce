import SignInButton from "../../ui/buttons/signInButton/SignInButton";
import Search from "../../ui/search/Search";
import CatalogMenu from "../Catalog/CatalogMenu/CatalogMenu";
import IconsBlock from "../iconsBlock/IconsBlock";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import ProfileCard from "../profilecard/ProfileCard";
import styles from './Header.module.scss';

export default function Header() {
    
     const check = localStorage.getItem('user')
      
    
    

    return (
        <header className={styles.header}>
            <div>
                <Logo />
                <CatalogMenu />
                <Search />
                <Navbar />
                <IconsBlock />
                {check === 'true' && <ProfileCard />}
                {check === 'true' || <SignInButton text='войти' />}
            </div>
           
        </header>
    );
}