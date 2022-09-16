import { Outlet } from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from './Layout.module.scss';
import MobileNavbar from '../mobileNavbar/MobileNavbar';

export default function Layout() {
    const width = document.documentElement.clientWidth

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div>
                    <Outlet />
                </div>
            </main>
            {width < 500 && <MobileNavbar /> } 
            <Footer />
        </>
    );
}