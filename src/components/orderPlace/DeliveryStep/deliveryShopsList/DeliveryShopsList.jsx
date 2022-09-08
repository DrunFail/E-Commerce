import shopsList from '../../../../data/shopsList';
import DeliveryShopsCard from '../deliveryShopsCard/DeliveryShopsCard';
import styles from './DeliveryShopsList.module.scss';

export default function DeliveryShopsList({delivery, newOrderData, setNewOrderData }) {
    return (
        <fieldset  onChange={(e) => {
            delivery.delivery_shop = e.target.value
            setNewOrderData({ ...newOrderData, delivery_shop: e.target.value })
        }}
            className={styles.container}>
            <legend>выберите магазин</legend>
            {shopsList.map(shop => <DeliveryShopsCard key={shop.id} shop={shop} /> ) }
            
        </fieldset>
        );
}