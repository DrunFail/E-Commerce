import styles from './ShopsList.module.scss';
import shopsList from '../../../data/shopsList';
import ShopsCard from '../shopsCard/ShopsCard';

export default function ShopsList() {
    return (
        <div className={styles.container}>
            <h1>список магазинов</h1>
            <ShopsCard shopsList={shopsList }/>
        </div>
        );
}