import { Link } from 'react-router-dom';
import navMenu from '../../data/navMenu.json';
import styles from './Navbar.module.scss';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const cart = useSelector(state => state.cart)
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
            <Link to='cart' >корзина {cart.length  }</Link>
        </nav>
    );
}