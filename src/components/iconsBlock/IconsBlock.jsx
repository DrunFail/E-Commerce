import { useSelector } from 'react-redux';
import styles from './IconsBlock.module.scss';
import { Link } from 'react-router-dom';
import CartSvgComponent from '../../ui/svgComponents/cart/CartSvgComponent';
import FavoriteListSvgComponent from '../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import CompareSvgComponent from '../../ui/svgComponents/compare/CompareSvgComponent';

export default function IconsBlock() {
    const cart = useSelector(state => state.cart)
    const favorite = useSelector(state => state.favorite)
    const compare = useSelector(state => state.compare)

    return (
        <div className={styles.container }>
            <Link to='cart'><CartSvgComponent /><span>{cart.length }</span>   </Link>
            <Link to='favorite'> <FavoriteListSvgComponent /><span>{favorite.length}</span> </Link>
            <Link to='compare'><CompareSvgComponent /><span>{compare.length}</span>  </Link>
        </div>
        );
}