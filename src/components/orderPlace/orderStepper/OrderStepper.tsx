import React, { useState } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectCart } from '../../../redux/slices/cart/cartSlice';
import CheckoutOrder from '../checkoutOrder/CheckoutOrder';
import ContactStep from '../ContactStep/ContactStep';
import DeliveryStep from '../DeliveryStep/DeliveryStep';
import PaymentStep from '../PaymentStep/PaymentStep';
import SuccessOrder from '../successOrder/SuccessOrder';
import styles from './OrderStepper.module.scss';

export default function OrderHead() {
    const links = ['метод оплаты', 'контакты', 'доставка и самовывоз',  'проверка данных', 'подтвердить заказ']
    const [step, setStep] = useState(0);

    const cart = useAppSelector(selectCart)
    console.log(cart)
    const [newOrderData, setNewOrderData] = useState < {
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
    } >
        ({
        contacts: {
            name: '',
            last_name: '',
            phone: '',
            email: ''
        },
        delivery: {
            delivery_method: 'shop',
            delivery_shop: 'магазин в каком-то ТЦ',
            city: '',
            street: '',
            home: '',
            home2: '',
            home3: '',
        },
        
        payment: 'cash',
        order: {
            id: '',
            title: '',
            price: 0,
            count: 0
        }
        
    })

    const { contacts, delivery, payment } = newOrderData

    const addCartOrder = () => {
        if (step === 3) {
            console.log(step)
            setNewOrderData({...newOrderData, order: cart})
        }
    }

    const textNextButton = (links: string[]) => {
        if (step === 2) {
            return links[3]
        }
        return `  ${links[step + 1]}`

    }

    const textPrevButton = (links: string[]) => {

        return `  ${links[step - 1]}`

    }

    return (
        <>

    
            {step === 4 && <SuccessOrder cash={newOrderData.payment } />}

        {
            step< 4 &&
                <div className={styles.container}>
                    <div className={styles.head}>
                        {links.slice(0, links.length - 1).map((link, id) =>

                            <p key={id}
                                onClick={() => setStep(id)}
                                className={styles[id < step ? 'active' : id === step ? 'current' : 'non_active']}>{link}</p>

                        )}
                    </div>

                    <form className={styles.wrapper} onSubmit={(e) => {
                        e.preventDefault()

                        setStep(step => ++step)
                    }}>

                        {step === 1 && <ContactStep
                            newOrderData={newOrderData}
                            setNewOrderData={setNewOrderData}
                            contacts={contacts}
                        />}

                        {step === 2 && <DeliveryStep
                            delivery={delivery}
                            newOrderData={newOrderData}
                            setNewOrderData={setNewOrderData}

                        />}

                        {step === 0 && <PaymentStep
                            payment={payment}
                            setNewOrderData={setNewOrderData}
                            newOrderData={newOrderData}
                        />}

                        {step === 3 && <CheckoutOrder
                            contacts={contacts}
                            payment={payment}
                            delivery={delivery}
                        />}



                        <div className={styles.buttons}>

                            {step === 0 || step === 4 || <button onClick={() => setStep(step => --step)}>{textPrevButton(links)}</button>}

                            {step === 4 || <button type='submit'
                                onClick={addCartOrder}

                                className={styles.next} id='btn2' >{textNextButton(links)}</button>}

                        </div>
                    </form>

                    
                </div>
        }
    </>
    );
}