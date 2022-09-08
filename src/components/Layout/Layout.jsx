import { Outlet } from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from './Layout.module.scss';

export default function Layout() {
    return (
        <>
            <Header />
            <main className={styles.main }>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}