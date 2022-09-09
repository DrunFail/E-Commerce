import { useSelector } from 'react-redux';
import './grid.css';
import { Link } from 'react-router-dom';
import CatalogMenu from '../Catalog/CatalogMenu/CatalogMenu';

export default function FavCategories() {
    const fav = useSelector(state => state.fav)
    return (
        <div id='fav'>
            <CatalogMenu />
           <h6>избранные категории</h6>
            {fav.map((elem, index) => <Link to={elem.link } key={index }>{elem.title}</Link>)}
        </div>
    );
}