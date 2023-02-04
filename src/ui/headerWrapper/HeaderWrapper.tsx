import React from "react";
import styles from './HeaderWrapper.module.scss';

interface HeaderWrapperProps {
    children: React.ReactNode
}

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
}