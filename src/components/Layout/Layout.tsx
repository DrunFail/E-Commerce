import React from 'react';
import { Outlet } from 'react-router-dom';
import BreadCrumbs from '../breadCrumbs/BreadCrumbs';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MobileNavbar from '../mobileNavbar/MobileNavbar';
import styles from './Layout.module.scss';

export default function Layout() {
    const width = document.documentElement.clientWidth

    return (
        <>
            <Header />
            <main className={styles.main}>
                
                    <BreadCrumbs />
                    <Outlet />
            </main>
            {width < 500 && <MobileNavbar /> } 
            <Footer />
        </>
    );
}