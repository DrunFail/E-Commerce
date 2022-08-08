import popProduct from '../../data/popProduct.json';
import styles from './PopProduct.module.scss';

export default function PopProduct() {
    return (
        <div className={styles.container }>
            {popProduct.map((product, index) =>
                <div className={styles.wrapper} key={index }>
                    <img className={styles.img} src={process.env.PUBLIC_URL + `${product.img}` } />
                    <p className={styles.title }>{product.title}</p>
                    <p className={styles.price }>{product.price}</p>
                </div>
)}
            </div>
        );
}