import { ReactComponent as HomeSvg } from '../../../assets/svg/home.svg';
import { Link } from 'react-router-dom';


export default function HomeSvgComponent() {
    return (
        <Link to='/'>
            <HomeSvg />
        </Link>

    );
}