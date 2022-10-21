import React from 'react';
import DeliveryForm from './deliveryForm/DeliveryForm';
import DeliveryShopsList from './deliveryShopsList/DeliveryShopsList';
import styles from './DeliveryStep.module.scss';


type NewOrderData = {
    contacts: {
        name: string,
        last_name: string,
        phone: string,
        email: string
    },
    delivery: {
        delivery_method: string,
        delivery_shop: string,
        city: string,
        street: string,
        home: string,
        home2: string,
        home3: string,
    },

    payment: string,
    order: {
        id: string,
        title: string,
        count: number,
        price: number
    } | {
        id: string,
        title: string,
        count: number,
        price: number
    }[]
}

interface DeliveryStepProps {
    delivery: {
        delivery_method: string,
        delivery_shop: string,
        city: string,
        street: string,
        home: string,
        home2: string,
        home3: string,
    },
    newOrderData: NewOrderData,
    setNewOrderData: any
}



export default function DeliveryStep({ delivery, newOrderData, setNewOrderData }: DeliveryStepProps) {


    return (
        <>
            <fieldset className={styles.container}

                onChange={(e: React.FormEvent<HTMLFieldSetElement>) => {
                    delivery.delivery_method = (e.target as HTMLFieldSetElement).id
                    setNewOrderData({ ...newOrderData, delivery })
                }}>
                <legend>выберите метод получения заказа</legend>

                <div>
                    <input defaultChecked type='radio' value='shop' id='shop' name='deliveryMethod' />
                    <label htmlFor='shop' >самовывоз</label>
                </div>

                <div>
                    <input type='radio' value='delivery' id='delivery' name='deliveryMethod' />
                    <label htmlFor='delivery'>доставка</label>
                </div>

            </fieldset>

            {delivery.delivery_method === 'delivery' &&
                <DeliveryForm
                    newOrderData={newOrderData}
                    setNewOrderData={setNewOrderData}
                    delivery={delivery}
                />}
            {delivery.delivery_method === 'shop' && <DeliveryShopsList
                delivery={delivery}
                setNewOrderData={setNewOrderData}
                newOrderData={newOrderData}
            />}


        </>
    );
}