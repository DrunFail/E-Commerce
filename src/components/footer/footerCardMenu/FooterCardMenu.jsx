import { Link } from 'react-router-dom';
import styles from './FooterCardMenu.module.scss';
import { useState } from 'react';

export default function FooterCardMenu({ menu }) {
    const width = document.documentElement.clientWidth
    const [showMenu, setShowMenu] = useState(width < 500 ? false : true)
    return (
        <div className={styles.sell}>
            <div
                onClick={() => setShowMenu(!showMenu)}
                className={styles[showMenu ? 'showMenu' : 'offscreen']}
            >
                <p
                    className={styles.title}
                >
                    {menu.title}
                </p>
                {width < 500 && <p >{`<` }</p>}
            </div>
            
            
            {showMenu &&
                menu.links.map((lin, index) =>
                    <Link key={index} className={styles.link} to={lin.link}>{lin.name}</Link>
                )
            }
        </div>
        );
}