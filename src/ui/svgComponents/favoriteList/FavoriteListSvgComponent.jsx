import { ReactComponent as HeartSvg } from '../../../assets/svg/heart.svg';
import { Link } from 'react-router-dom';

export default function FavoriteListSvgComponent() {
    return (
        <Link to='favorite'>
            <HeartSvg />
            </Link>
        );
}