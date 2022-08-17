import { useSelector } from 'react-redux';
import './grid.css';

export default function FavCategories() {
    const fav = useSelector(state => state.fav)
    return (
        <div id='fav'>
           
            {fav.map((elem, index) => <p key={index }>{elem.title}</p>)}
        </div>
    );
}