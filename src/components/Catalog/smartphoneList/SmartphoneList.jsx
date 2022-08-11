import mproducts from '../../../data/mproducts.json';
import styles from './SmartphoneList.module.scss';
import ProductCard from '../productCard/ProductCard';

export default function SmartphoneList() {
    return (
        <div className={styles.container }>
            {
                mproducts.map((smart, index) =>
                    <ProductCard key={index} smart={smart }/>
                )
            }
        </div>
        
    );
}