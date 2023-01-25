import React, { useState } from 'react';
import footerMenu from '../../data/footerMenu.json';
import styles from './Footer.module.scss';
import FooterCardMenu from './footerCardMenu/FooterCardMenu';
import { FooterItem } from './interfaces/interfaces';


export default function Footer() {
    const [footerData] = useState<FooterItem[]>(footerMenu)

    return (
        <div className={styles.wrapper}>
            <footer className={styles.footer }>
                {footerData.map((menu, index) =>
                    <FooterCardMenu key={index} menu={menu} />
                )}
            </footer>
        </div>
    );
}