import React from "react";
import { useResize } from "../../hooks/useResize";
import SignInButton from "../../ui/buttons/signInButton/SignInButton";
import Search from "../../ui/search/Search";
import CatalogMenu from "../catalog/CatalogMenu/CatalogMenu";
import IconsBlock from "../iconsBlock/IconsBlock";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import ProfileCard from "../profilecard/ProfileCard";
import styles from './Header.module.scss';



export default function Header() {
    const check = localStorage.getItem('user')
    
    const width    = useResize()!
    

    return (
        <div className={styles.headerWrapper}>
            <header className={styles[width < 500 ? 'mobileHeader' : 'header']}>
                <Logo />
                <CatalogMenu />
                { width < 500 ||
                    <>
                        <Search />
                        <Navbar />
                        <IconsBlock />
                    </>
                }

                {check
                    ? <ProfileCard />
                    : <SignInButton children='войти' />}
            </header>
        </div>
    );
}