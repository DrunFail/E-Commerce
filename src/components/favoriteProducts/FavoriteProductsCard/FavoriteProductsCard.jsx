import styles from './FavoriteProductsCard.module.scss';
import { removeFavorite } from '../../../redux/slices/favorite/favoriteSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteSvgComponent from '../../../ui/svgComponents/delete/DeleteSvgComponent';

export default function FavoriteProductsCard({ product }) {
    const dispatch = useDispatch();
    return (
        <div className={styles.container }>
            <img src={product.img } />
            <Link to={product.link }>{product.title}</Link>
            <button onClick={() => dispatch(removeFavorite(product.id)) }><DeleteSvgComponent /></button>
        </div>
        );
}