import styles from './PromoCard.module.scss';
import { useNavigate } from 'react-router-dom';

export default function PromoCard({ promoList }) {
    const navigate = useNavigate();
    return (
        <>
            {
                promoList.map(promo =>
                    <div onClick={() => navigate(`./${promo.translit}`) } key={promo.id}
                        className={styles.container }                    >
                        <p className={styles.title }>{promo.name}</p>
                        <p>срок действия: {promo.validity.start} - {promo.validity.end}</p>
                        <p>{promo.value}</p>
                    </div>
                )
            }
        </>
    );
}