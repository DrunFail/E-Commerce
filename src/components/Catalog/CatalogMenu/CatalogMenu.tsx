import { useState } from 'react';
import CategoryMenu from '../../../data/CategoryMenu.json';
import styles from './CatalogMenu.module.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import CatalogMenuButton from '../../../ui/buttons/catalogMenuButton/CatalogMenuButton';
import React from 'react';

export default function CatalogMenu() {

    const [visibleCatalog, setVisibleCatalog] = useState(false)

    const toggleVisible = () => {
        setVisibleCatalog(!visibleCatalog)
    }

    useEffect(() => {
        if (visibleCatalog) {
            document.body.style.overflow = 'hidden'
            document.body.style.pointerEvents = 'none'
            
        } else {
            document.body.style.overflow = 'visible'
            document.body.style.pointerEvents = 'auto'
        }
    }, [visibleCatalog])


    return (
        <>
            <div className={styles.wrapperButton} onClick={toggleVisible}>
                <CatalogMenuButton />
            </div>
           
            
            <div className={styles[visibleCatalog ? 'container' : 'offscreen']} onClick={toggleVisible} >
            
                <nav className={styles[visibleCatalog ? 'visible' : 'offscreen']}>
                        {CategoryMenu.map((cat, index) =>
                            <Link key={index} onClick={toggleVisible} to={cat.link}>{cat.title}</Link>
                    )}
                </nav>
        </div>
        </>
        

    );
}