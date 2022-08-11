import tabletsList from '../../../data/tabletsList';
import styles from './TabletsList.module.scss';
import ProductCard from '../productCard/ProductCard';

export default function TabletsList() {
    return (
        <div className={styles.container}>
            {
                tabletsList.map((smart, index) =>
                    <ProductCard key={index} smart={smart} />
                )
            }
        </div>
        );
}