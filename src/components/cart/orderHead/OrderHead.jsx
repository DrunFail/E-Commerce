

import { useState } from 'react';
import styles from './OrderHead.module.scss';
import Order from '../Order/Order';
import DeliveryForm from '../DeliveryForm';
import PaymentForm from '../PaymentForm';
import SuccessOrder from '../SuccessOrder';

export default function OrderHead() {
    const links = ['контакты', 'доставка', 'оплата', 'подтвердить заказ']
    const [step, setStep] = useState(0);

    const textNextButton = () => {
        if (step === 2) {
            return links[3]
        } 
            return ` перейти к ${links[step + 1]}`
        
    }

    const textPrevButton = () => {
        
        return ` вернуться к ${links[step - 1]}`

    }

    return (
            <div className={styles.container}>
                <div className={styles.head }>
                {links.map((link, id) => <p key={id} onClick={() => setStep(id) } className={styles[id < step ? 'active' : id === step ? 'current' : 'non_active'] }>{link}</p>)}
                </div>
                {step === 0 && <Order   />} 
                {step === 1 && <DeliveryForm  />}
                {step === 2 && <PaymentForm  />}
                {step === 3 && <SuccessOrder />}
            <div className={styles.buttons }>
                {step === 0 || step === 3 || <button onClick={() => setStep(step => --step)}>{textPrevButton(links) }</button> }
            
                {step === 3 || <button className={styles.next} id='btn2' onClick={() => setStep(step => ++step)}>{textNextButton(links)}</button>}

            </div>
        </div>
        );
}