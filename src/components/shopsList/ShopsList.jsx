import styles from './ShopsList.module.scss';
import shopsList from '../../data/shopsList';

export default function ShopsList() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title }>список магазинов</h2>
            {shopsList.map(shop => 
                <div className={styles.wrapper }>
                    <p className={styles.shop_name }>{shop.name}</p>
                    <p>Адрес: {shop.address.city},
                        {shop.address.street},
                        {shop.address.dom},
                        {shop.address.korpus }

                    </p>
                    <p>часы работы: {shop.work_hours.start} - {shop.work_hours.end }</p>
                    <p>обеденный перерыв: {shop.work_hours.obed.start} - {shop.work_hours.obed.end }</p>
                </div>
                )}
            
        </div>
        );
}