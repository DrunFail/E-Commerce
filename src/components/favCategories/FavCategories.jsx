import { useSelector } from 'react-redux';
import './grid.css';
import { Link } from 'react-router-dom';


export default function FavCategories() {
    const fav = useSelector(state => state.fav)
    return (
        <div id='fav'>
            
           <h6>избранные категории</h6>
            {fav.map((elem, index) => <Link to={elem.link } key={index }>{elem.title}</Link>)}
        </div>
    );
}