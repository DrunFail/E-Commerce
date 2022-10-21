import React from 'react';
import MenuSvgComponent from '../../svgComponents/menu/MenuSvgComponent';
import styles from './CatalogMenuButton.module.scss';

export default function CatalogMenuButton() {
    return (
        <button
            className={styles.catalog}
        >
            <MenuSvgComponent />каталог
        </button>
        );
}