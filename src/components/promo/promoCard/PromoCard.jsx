import styles from './PromoCard.module.scss';
import { useNavigate } from 'react-router-dom';

export default function PromoCard({ promo }) {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`./${promo.translit}`)}
            key={promo.id}
            className={styles.container}>
            <div
                className={styles.imagePromo}>

            </div>
            <div className={styles.promoDescription }>
                <p
                    className={styles.title}>
                    {promo.name}
                </p>
                <p className={styles.date }>
                    {promo.validity.start} - {promo.validity.end}
                </p>
                <p>
                    {promo.value}
                </p>
            </div>
            
        </div>
    );
}