import { ReactComponent as CartSvg } from '../../assets/svg/cart.svg';
import { ReactComponent as FavoriteSvg } from '../../assets/svg/favorite.svg';
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
            <Link to='cart'><CartSvg className={styles.svg } /><span>{cart.length }</span>   </Link>
            <Link to='favorite'> <FavoriteSvg className={styles.svg} /><span>{favorite.length}</span> </Link>
            <Link to='compare'><CompareSvg className={styles.svg} /><span>{compare.length}</span>  </Link>
        </div>
        );
}