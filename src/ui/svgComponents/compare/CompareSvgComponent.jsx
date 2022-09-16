import { ReactComponent as CompareSvg } from '../../../assets/svg/compare.svg';
import { Link } from 'react-router-dom';


export default function CompareSvgComponent() {
    return (
        <Link to='compare'>
            <CompareSvg />
        </Link>

    );
}