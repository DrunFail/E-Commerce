import React from "react";
import useAuth from "../../../hooks/useAuth";
import SignInButton from "../../../ui/buttons/signInButton/SignInButton";
import Logo from "../../../ui/logo/Logo";
import CatalogMenu from "../../catalog/CatalogMenu/CatalogMenu";
import ProfileCard from "../../profilecard/ProfileCard";
import styles from './MobileHeader.module.scss';


export default function MobileHeader() {
    const isAuth = useAuth();


    return (
        <header className={styles.header }>
            <CatalogMenu />
            <Logo />
            {isAuth
                ? <ProfileCard />
                : <SignInButton children='войти' />}
        </header>

    );
}