import { Link } from 'react-router-dom';
import CartSvgComponent from '../../../ui/svgComponents/cart/CartSvgComponent';
import CompareSvgComponent from '../../../ui/svgComponents/compare/CompareSvgComponent';
import FavoriteListSvgComponent from '../../../ui/svgComponents/favoriteList/FavoriteListSvgComponent';
import styles from './PopProductCard.module.scss';


export default function PopProductCard({ product }) {

    return (
        <>

            <div className={styles.container}>
                <img
                    alt={`изображение ${product.title}`}
                    src={process.env.PUBLIC_URL + `${product.img}.jpg`}
                    srcSet={process.env.PUBLIC_URL + `${product.img}.jpg` + ` 1080w`,
                        process.env.PUBLIC_URL + `${product.img}-small.jpg` + ` 480w`
                    }

                />
                <Link
                    className={styles.titleProduct}
                    to={product.link}
                >
                    {product.title}
                </Link>
                <p className={styles.priceProduct}>{product.price}</p>
                <div className={styles.buttons}>

                    <div>
                        <CompareSvgComponent />
                        <FavoriteListSvgComponent />
                    </div>
                    <button aria-label="add to cart" ><CartSvgComponent /></button>

                </div>

            </div>

        </>
    );
}