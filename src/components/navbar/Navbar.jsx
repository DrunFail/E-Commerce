import { Link } from 'react-router-dom';
import navMenu from '../../data/navMenu.json';
import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.nav }>
            {navMenu.map((nav, index) =>
                <Link
                    key={index}
                    className={styles.link}
                    to={nav.link}>
                    {nav.title}
                </Link>
            )}
        </nav>
    );
}