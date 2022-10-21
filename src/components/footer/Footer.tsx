import styles from './Footer.module.scss';
import footerMenu from '../../data/footerMenu.json';
import FooterCardMenu from './footerCardMenu/FooterCardMenu';
import React from 'react';

interface ILink {
    name: string,
    link: string
}

interface IMenu {
    title: string,
    links: ILink[]
}



export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div>
                {footerMenu.map((menu, index) =>
                    <FooterCardMenu key={index} menu={menu} />
                )}
            </div>

        </footer>
    );
}