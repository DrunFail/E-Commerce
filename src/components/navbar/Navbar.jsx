import navMenu from '../../data/navMenu.json';

export default function Navbar() {
    return (
        <nav>
            {navMenu.map(nav => <a href={nav.link}>{nav.title}</a>)}
        </nav>
    );
}