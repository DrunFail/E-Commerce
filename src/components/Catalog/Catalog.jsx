import { useState } from 'react';
import { useDispatch } from 'react-redux';
import catalog from '../../data/catalog.json';
import { addFav } from '../../features/fav/favSlice';
import './catalog.css';

export default function Catalog() {
    const [visibleCatalog, setVisibleCatalog] = useState(false)
    const dispatch = useDispatch()
    return (
        <div className='cont'>
            <button onClick={() => setVisibleCatalog(!visibleCatalog)} className='container'>catalog</button>
            <nav className={visibleCatalog ? 'visible' : 'offscreen'}>
                {catalog.map((cat, index) =>
                    <div key={index}>
                        <a className='cat-link' href={cat.link}>{cat.title}</a>
                        <button
                            onClick={() => dispatch(addFav({
                            title: cat.title,
                            link: cat.link
                            }))}>
                            add fav
                        </button>

                    </div>
                )}
            </nav>
        </div>

    );
}