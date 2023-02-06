import React from 'react';
import { OrderData } from '../../interfaces/interfaces';
import DeliveryForm from './deliveryForm/DeliveryForm';
import DeliveryShopsList from './deliveryShopsList/DeliveryShopsList';
import styles from './DeliveryStep.module.scss';


interface DeliveryStepProps {
    data: OrderData,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeFieldset: (e: React.FormEvent<HTMLFieldSetElement>) => void
}


export default function DeliveryStep({ data, handleChange, handleChangeFieldset }: DeliveryStepProps) {

    return (
        <>
            <fieldset className={styles.container}
                onChange={handleChangeFieldset}>

                <legend>выберите метод получения заказа</legend>

                <div>
                    <input
                        type='radio'
                        value='shop'
                        id='shop'
                        name='delivery_method' />
                    <label htmlFor='shop' >самовывоз</label>
                </div>

                <div>
                    <input
                        defaultChecked
                        type='radio'
                        value='delivery'
                        id='delivery'
                        name='delivery_method' />
                    <label htmlFor='delivery'>доставка</label>
                </div>

            </fieldset>

            {data.delivery_method === 'delivery' &&
                <DeliveryForm
                    data={data}
                    handleChange={handleChange}
                />}
            {data.delivery_method === 'shop' && <DeliveryShopsList
                data={data}
                handleChangeFieldset={handleChangeFieldset}

            />}

        </>
    );
}