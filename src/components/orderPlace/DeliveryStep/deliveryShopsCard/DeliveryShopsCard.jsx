import styles from './DeliveryShopsCard.module.scss';

export default function DeliveryShopsCard({ shop }) {
    return (
        <div className={styles.wrapper}>
           
            <input
                defaultChecked={shop.id === 1 ? true : false }
                value={shop.name}
                type='radio'
                id={shop.id}
                name='shop'
                required
            />

            <label  htmlFor={shop.id} >
                <div>
                    <h2>{shop.name}</h2>
                    <p><span> Адрес:</span> {shop.address.city},
                        {shop.address.street},
                        {shop.address.dom},
                        {shop.address.korpus}

                    </p>
                    <p>часы работы: {shop.work_hours.start} - {shop.work_hours.end}</p>
                    <p>обеденный перерыв: {shop.work_hours.obed.start} - {shop.work_hours.obed.end}</p>

                </div>
            </label>
            </div>
       
        );
}