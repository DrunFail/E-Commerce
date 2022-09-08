import { useState } from 'react';
import CheckoutOrder from '../checkoutOrder/CheckoutOrder';
import ContactStep from '../ContactStep/ContactStep';
import DeliveryStep from '../DeliveryStep/DeliveryStep';
import PaymentStep from '../PaymentStep/PaymentStep';
import SuccessOrder from '../successOrder/SuccessOrder';
import styles from './OrderStepper.module.scss';

export default function OrderHead() {
    const links = ['метод оплаты', 'контакты', 'доставка и самовывоз',  'проверка данных', 'подтвердить заказ']
    const [step, setStep] = useState(0);
    
    const [newOrderData, setNewOrderData] = useState({
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
        
            payment: 'cash'
        
    })

    const { contacts, delivery, payment } = newOrderData
 

    const textNextButton = () => {
        if (step === 2) {
            return links[3]
        }
        return `  ${links[step + 1]}`

    }

    const textPrevButton = () => {

        return `  ${links[step - 1]}`

    }

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                {links.slice(0, links.length-1).map((link, id) => 
                   
                        <p key={id}
                            onClick={() => setStep(id)}
                            className={styles[id < step ? 'active' : id === step ? 'current' : 'non_active']}>{link}</p>
                    
                )}
            </div>

            <form className={styles.wrapper}  onSubmit={(e) => {
                e.preventDefault()
                
                setStep(step => ++step)
            }}>

                {step === 1 && <ContactStep
                    newOrderData={newOrderData}
                    setNewOrderData={setNewOrderData}
                    contacts={contacts }
                />}

                {step === 2 && <DeliveryStep
                    delivery={delivery }
                    newOrderData={newOrderData}
                    setNewOrderData={setNewOrderData}
                   
                />}

                {step === 0 && <PaymentStep
                    payment={payment }
                    setNewOrderData={setNewOrderData}
                    newOrderData={newOrderData }
                    />}

                {step === 3 && <CheckoutOrder
                    contacts={contacts}
                    payment={payment}
                    delivery={delivery }
                />}

                {step === 4 && <SuccessOrder  />}

                <div className={styles.buttons}>

                    {step === 0 || step === 4 || <button onClick={() => setStep(step => --step)}>{textPrevButton(links)}</button>}

                {step === 4 || <button type='submit'  className={styles.next} id='btn2' >{textNextButton(links)}</button>}

                </div>
            </form>

            
        </div>
    );
}