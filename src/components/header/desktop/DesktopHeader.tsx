import React from "react";
import useAuth from "../../../hooks/useAuth";
import SignInButton from "../../../ui/buttons/signInButton/SignInButton";
import Logo from "../../../ui/logo/Logo";
import Search from "../../../ui/search/Search";
import CatalogMenu from "../../catalog/CatalogMenu/CatalogMenu";
import IconsBlock from "../../iconsBlock/IconsBlock";
import Navbar from "../../navbar/Navbar";
import ProfileCard from "../../profilecard/ProfileCard";
import styles from './DesktopHeader.module.scss';


export default function DesktopHeader() {
    const isAuth = useAuth()
    

    return (
            <header className={styles.header}>
                    <div className={styles.top}>
                        <Navbar />
                        <p>8(800)655-55-55</p>
                    </div>
                <Logo />
                <CatalogMenu />
                        <Search />
                        <IconsBlock />

                {isAuth
                    ? <ProfileCard />
                    : <SignInButton children='войти' />}
            </header>
    );
}