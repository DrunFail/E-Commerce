import React from "react";
import { Link } from "react-router-dom";
import { FooterLinkItem } from "../interfaces/interfaces";
import styles from './FooterLink.module.scss';


interface FooterLinkProps {
    link: FooterLinkItem
}

export default function FooterLink({link }:FooterLinkProps) {
    return (
        <li className={styles.li }>
            <Link
                className={styles.link}
                to={link.link}>
                {link.name}
            </Link>
        </li>
        );
}