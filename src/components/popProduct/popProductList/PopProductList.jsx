import popProduct from '../../../data/popProduct.json';
import styles from './PopProductList.module.scss';
import PopProductCard from '../popProductCard/PopProductCard';

export default function PopProduct() {
    return (
        <div className={styles.container}>
            <h1>популярные товары</h1>
            {popProduct.map((product, index) =>
                <PopProductCard key={index} product={product} />)}
        </div>
    );
}