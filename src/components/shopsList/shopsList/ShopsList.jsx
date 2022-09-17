import styles from './ShopsList.module.scss';
import shopsList from '../../../data/shopsList';
import ShopsCard from '../shopsCard/ShopsCard';

export default function ShopsList() {
    return (
        <div className={styles.container}>
            <h1>Адреса магазинов</h1>
            {shopsList.map(shop =>
                <ShopsCard
                    key={shop.id}
                    shop={shop}
                />)}
        </div>
    );
}