import styles from './Footer.module.scss';
import footerMenu from '../../data/footerMenu';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                {footerMenu.map((menu, index) =>
                    <div key={index} className={styles.sell}>
                        <p className={styles.title}>{menu.title}</p>
                        {menu.links.map((lin, index) =>
                            <Link key={index} className={styles.link} to={lin.link}>{lin.name}</Link>
                        )}
                    </div>
                )}
            </div>
           
        </footer>
    );
}