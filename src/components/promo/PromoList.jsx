import styles from './PromoList.module.scss';
import promoList from '../../data/promoList.json';
import PromoCard from './promoCard/PromoCard';

export default function PromoList() {
    return (
        <div className={styles.container }>
            <h1 className={styles.title}>список акций</h1>
            <PromoCard promoList={promoList }/>
        </div>
        );
}