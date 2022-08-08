import { useState } from 'react';
import catalog from '../../data/catalog.json';
import './catalog.css';

export default function Catalog() {
    const [visibleCatalog, setVisibleCatalog] = useState(false)
    return (
        <div className='cont'>
            <button onClick={() => setVisibleCatalog(!visibleCatalog)} className='container'>catalog</button>
            <nav className={visibleCatalog ? 'visible' : 'offscreen'}>
                {catalog.map((cat, index) => <a className='cat-link' key={index} href={cat.link }>{cat.title}</a>)}
            </nav>
       </div>

    );
}