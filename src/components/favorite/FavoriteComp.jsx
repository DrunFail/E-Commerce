import { useSelector } from 'react-redux';

export default function FavoriteComp() {
    const favorites = useSelector(state => state.favorite)

    return (
        
        <div>

            {favorites.map(favorite => <div key={favorite.id }>
                <p>{favorite.title }</p>
            </div>)}
        </div>);
}