import mproducts from '../../../data/mproducts.json';
import styles from './SmartphoneList.module.scss';
import ProductCard from '../../product/productCard/ProductCard';

export default function SmartphoneList() {
    return (
        <div className={styles.container}>
            <h1>Смартфоны найдено: {mproducts.length}</h1>
            {
                mproducts.map((smart, index) =>
                    <ProductCard key={index} smart={smart }/>
                )
            }
        </div>
        
    );
}