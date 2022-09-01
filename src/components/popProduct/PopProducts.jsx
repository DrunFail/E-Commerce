import popProduct from '../../data/popProduct.json';
import styles from './PopProduct.module.scss';
import { Link } from 'react-router-dom';

export default function PopProduct() {
    return (
        <div className={styles.container}>
            <h1 className={styles.main_title }>популярные товары</h1>
            {popProduct.map((product, index) =>
                <div className={styles.wrapper} key={index }>
                    <img className={styles.img} alt='image' src={process.env.PUBLIC_URL + `${product.img}` } />
                    <Link to={product.link} className={styles.title }>{product.title}</Link>
                    <p className={styles.price }>{product.price}</p>
                </div>
)}
            </div>
        );
}