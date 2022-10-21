import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
    const navLinks = [
        {
            "title": "Акции",
            "link": "/promo"
        },
        {
            "title": "Услуги",
            "link": "/services"
        },
        {
            "title": "Магазины",
            "link": "/shops"
        },
        {
            "title": "Форум",
            "link": "/forum"
        }
    ]

    const currentLocation = useLocation();
    const {pathname } = currentLocation
    


    return (
        <nav
            className={styles.nav}
        >
            <ul role='list'>
                {navLinks.map((link, index) => {
                    const aria = (pathname === link.link) ? "page"  : undefined
                    return (
                        <li
                            key={index}
                        >
                            <Link
                                className={styles.link}
                                to={link.link}
                                aria-current={aria}
                            >
                                {link.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}