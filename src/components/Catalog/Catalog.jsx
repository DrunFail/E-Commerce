import { useState } from 'react';
import { useDispatch } from 'react-redux';
import catalog from '../../data/catalog.json';
import { addFav } from '../../redux/slices/fav/favSlice';
import './catalog.css';
import { ReactComponent as AddFavSvg } from '../../assets/svg/heart.svg';

export default function Catalog() {
    const [visibleCatalog, setVisibleCatalog] = useState(false)
    const dispatch = useDispatch()
    return (
        <div className='cont'>
            <button onClick={() => setVisibleCatalog(!visibleCatalog)} className='container'>каталог</button>
            <nav className={visibleCatalog ? 'visible' : 'offscreen'}>
                {catalog.map((cat, index) =>
                    <div key={index} className='wrapper'>
                        <a className='cat-link' href={cat.link}>{cat.title}</a>
                        <button
                            onClick={() => dispatch(addFav({
                            title: cat.title,
                            link: cat.link
                            }))}>
                            <AddFavSvg className='addFav'/>
                        </button>

                    </div>
                )}
            </nav>
        </div>

    );
}