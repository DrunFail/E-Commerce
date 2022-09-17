import styles from './Footer.module.scss';
import footerMenu from '../../data/footerMenu';
import FooterCardMenu from './footerCardMenu/FooterCardMenu';

export default function Footer() {
    
    return (
        <footer className={styles.footer}>
            <div>
                {footerMenu.map((menu, index) =>
                    <FooterCardMenu key={index} menu={menu }/>
                )}
            </div>
           
        </footer>
    );
}