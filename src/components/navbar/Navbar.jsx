import { Link } from 'react-router-dom';
import navMenu from '../../data/navMenu.json';

export default function Navbar() {
    return (
        <nav>
            {navMenu.map(nav => <Link to={nav.link}>{nav.title}</Link>)}
        </nav>
    );
}