import favCateg from '../../data/favCateg';

export default function FavCategories() {
    return (
        <div>
            {favCateg.map(fav => <p>{fav.title}</p>)}
        </div>
    );
}