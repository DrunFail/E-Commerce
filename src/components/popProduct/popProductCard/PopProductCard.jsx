import { Link } from 'react-router-dom';
import { ReactComponent as CartSvg } from '../../../assets/svg/cart.svg';
import { ReactComponent as CompareSvg } from '../../../assets/svg/compare.svg';
import { ReactComponent as FavoriteSvg } from '../../../assets/svg/heart.svg';
import styles from './PopProductCard.module.scss';

export default function PopProductCard({ product }) {
    return (
        <>

            <div className={styles.container}>
                <img alt='image' src={process.env.PUBLIC_URL + `${product.img}`} />
                <Link to={product.link}>{product.title}</Link>
                <p>{product.price}</p>
                <div className={styles.buttons }>
                   
                    <div>
                        <CompareSvg />
                        <FavoriteSvg />
                    </div>
                    <button ><CartSvg /></button>
                   
                </div>

            </div>

        </>
    );
}