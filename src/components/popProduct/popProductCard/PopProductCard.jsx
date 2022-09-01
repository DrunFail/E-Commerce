import { Link } from 'react-router-dom';
import { ReactComponent as CartSvg } from '../../../assets/svg/cart.svg';
import styles from './PopProductCard.module.scss';

export default function PopProductCard({ popProduct }) {
    return (
        <>
            {popProduct.map((product, index) =>
                <div className={styles.container} key={index}>
                    <img alt='image' src={process.env.PUBLIC_URL + `${product.img}`} />
                    <Link to={product.link}>{product.title}</Link>
                    <p>{product.price}</p>
                    <button><CartSvg /></button>
                </div>
            )}
        </>
    );
}