import { useState } from 'react';
import CategoryMenu from '../../../data/CategoryMenu.json';
import styles from './CatalogMenu.module.scss';
import { Link } from 'react-router-dom';

export default function CatalogMenu() {
    const [visibleCatalog, setVisibleCatalog] = useState(false)
    return (
        <div className={styles.container }>
            <button onClick={() => setVisibleCatalog(!visibleCatalog)} >каталог</button>
            <nav className={styles[visibleCatalog ? 'visible' : 'offscreen']}>
                {CategoryMenu.map((cat, index) =>
                    <Link key={index}  to={cat.link}>{cat.title}</Link>
                )}
            </nav>
        </div>

    );
}