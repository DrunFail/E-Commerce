import React from 'react';
import styles from './ArrowLeft.module.scss';

interface ArrowLeftProps {
    handler: (id: string) => void,
    id: string
}

export default function ArrowLeft({handler, id }: ArrowLeftProps) {
    return (
        <button className={styles.button}
            onClick={() => handler(id) }        >
            <svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
                <polyline fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
	45.63,75.8 0.375,38.087 45.63,0.375 "/>
            </svg>
        </button>
        );
}