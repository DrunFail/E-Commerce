import { ReactComponent as CartSvg } from '../../assets/svg/cart.svg';
import { ReactComponent as FavoriteSvg } from '../../assets/svg/favorite.svg';
import { ReactComponent as CompareSvg } from '../../assets/svg/compare.svg';
import { useSelector } from 'react-redux';
import './iconsBlock.css';
import { Link } from 'react-router-dom';

export default function IconsBlock() {
    const cart = useSelector(state => state.cart)

    return (
        <div className='container'>
            <Link to='cart'><CartSvg className='cart' /><span>{cart.length }</span>   </Link>
            <Link to='favorite'> <FavoriteSvg className='favorite' /> </Link>
            <Link to='compare'><CompareSvg className='compare' />  </Link>
        </div>
        );
}