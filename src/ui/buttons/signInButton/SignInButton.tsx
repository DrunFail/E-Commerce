import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignInButton.module.scss';

interface Props {
    children: string
}

export default function SignInButton({ children }: Props) {
    return (
        <Link
            className={styles.button}
            to='login'>
            {children}
        </Link>
    );
}