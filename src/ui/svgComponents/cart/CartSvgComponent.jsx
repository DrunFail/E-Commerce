import { ReactComponent as CartSvg } from '../../../assets/svg/cart.svg';
import { Link } from 'react-router-dom';

export default function CartSvgComponent() {
    return (
        <Link to='cart'>
            <CartSvg />
        </Link>
        );
}