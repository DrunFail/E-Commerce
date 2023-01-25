import React from 'react';
import FooterLink from '../footerLink/FooterLink';
import { FooterItem } from '../interfaces/interfaces';
import styles from './FooterCardMenu.module.scss';


interface FooterCardMenuProps {
    menu: FooterItem
}


export default function FooterCardMenu({ menu }: FooterCardMenuProps) {
    return (
        <div className={styles.sell}>
            <p className={styles.title}>
                {menu.title}
            </p>

            <ul>
                {menu.links
                    .map((elem, index: number) =>
                        <FooterLink
                            key={index}
                            link={elem} />
                    )
                }
            </ul>

        </div>
    );
}