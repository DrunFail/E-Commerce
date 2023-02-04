import React from 'react';
import { Outlet } from 'react-router-dom';
import { useResize } from '../../hooks/useResize';
import HeaderWrapper from '../../ui/headerWrapper/HeaderWrapper';
import BreadCrumbs from '../breadCrumbs/BreadCrumbs';
import Footer from "../footer/Footer";
import DesktopHeader from '../header/desktop/DesktopHeader';
import MobileHeader from '../header/mobile/MobileHeader';
import MobileNavbar from '../mobileNavbar/MobileNavbar';
import styles from './Layout.module.scss';

export default function Layout() {
    const width = useResize();

    return (
        <>
            <HeaderWrapper>
                {width < 1025
                    ? <MobileHeader />
                    : <DesktopHeader />}
            </HeaderWrapper>


            <main className={styles.main}>
                <BreadCrumbs />
                <Outlet />
            </main>

            {width < 1025 && <MobileNavbar />}
            <Footer />
        </>
    );
}