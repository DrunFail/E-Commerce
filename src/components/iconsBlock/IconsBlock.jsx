import { ReactComponent as CartSvg } from '../../assets/svg/cart.svg';
import { ReactComponent as FavoriteSvg } from '../../assets/svg/heart.svg';
import { ReactComponent as CompareSvg } from '../../assets/svg/compare.svg';
import { useSelector } from 'react-redux';
import styles from './IconsBlock.module.scss';
import { Link } from 'react-router-dom';

export default function IconsBlock() {
    const cart = useSelector(state => state.cart)
    const favorite = useSelector(state => state.favorite)
    const compare = useSelector(state => state.compare)

    return (
        <div className={styles.container }>
            <Link to='cart'><CartSvg /><span>{cart.length }</span>   </Link>
            <Link to='favorite'> <FavoriteSvg /><span>{favorite.length}</span> </Link>
            <Link to='compare'><CompareSvg /><span>{compare.length}</span>  </Link>
        </div>
        );
}