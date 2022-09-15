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
    let width = document.documentElement.clientWidth

    
    



    return (
        <div className={styles.headerWrapper}>
            <header className={styles.header}>
                <Logo />
                {width <= 500 || <div className={styles.headerContent}>
                    <CatalogMenu />
                    <Search />
                    <Navbar />
                    <IconsBlock />
                    {check === 'true' && <ProfileCard />}
                    {check === 'true' || <SignInButton text='войти' />}
                </div>}
                {width <= 500 &&
                    <div className={styles.mobile }>
                        <CatalogMenu />  
                        {check === 'true' && <ProfileCard />}
                        {check === 'true' || <SignInButton text='войти' />}
                    </div>
                    }
            </header>
        </div>
    );
}