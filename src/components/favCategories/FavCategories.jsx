import favCateg from '../../data/favCateg';
import './grid.css';

export default function FavCategories() {
    return (
        <div id='fav'>
            {favCateg.map(fav => <p>{fav.title}</p>)}
        </div>
    );
}