import styles from './MobileNavbar.module.scss';
import FavoriteListSvgComponent from '../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import CartSvgComponent from '../../ui/svgComponents/cart/CartSvgComponent';
import CompareSvgComponent from '../../ui/svgComponents/compare/CompareSvgComponent';
import HomeSvgComponent from '../../ui/svgComponents/home/HomeSvgComponent';


export default function MobileNavbar() {
    return (
        <div className={styles.container}>
            <HomeSvgComponent />
            <FavoriteListSvgComponent />
            <CartSvgComponent />
            <CompareSvgComponent />

        </div>
        );
}