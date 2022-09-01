import styles from './ShopsCard.module.scss';

export default function ShopsCard({ shopsList }) {
    return (
        <>
            {shopsList.map(shop =>
                <div className={styles.wrapper}>
                    <h2 >{shop.name}</h2>
                    <p>Адрес: {shop.address.city},
                        {shop.address.street},
                        {shop.address.dom},
                        {shop.address.korpus}

                    </p>
                    <p>часы работы: {shop.work_hours.start} - {shop.work_hours.end}</p>
                    <p>обеденный перерыв: {shop.work_hours.obed.start} - {shop.work_hours.obed.end}</p>
                </div>
            )}
        </>
        );
}