import React, { useState } from 'react';
import ButtonBlock from '../buttonBlock/ButtonBlock';
import CheckoutOrder from '../checkoutOrder/CheckoutOrder';
import ContactStep from '../ContactStep/ContactStep';
import DeliveryStep from '../DeliveryStep/DeliveryStep';
import HeaderStepper from '../headerStepper/HeaderStepper';
import { OrderData } from '../interfaces/interfaces';
import PaymentStep from '../PaymentStep/PaymentStep';
import SuccessOrder from '../successOrder/SuccessOrder';
import styles from './OrderStepper.module.scss';

const init: OrderData = {
    name: '',
    last_name: '',
    phone: '',
    email: '',
    delivery_method: 'delivery',
    delivery_shop: '',
    city: '',
    street: '',
    home: '',
    home2: '',
    home3: '',
    id: '',
    title: '',
    count: 0,
    price: 0,
    payment: 'cash'
}



export default function OrderHead() {
    const links = ['метод оплаты', 'контакты', 'доставка и самовывоз', 'проверка данных', 'подтвердить заказ']
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState(init)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        setFormData(formData => ({ ...formData, [name]: e.target.value }))
    }

    const handleChangeFieldset = (e: React.FormEvent<HTMLFieldSetElement>) => {
        const name = (e.target as HTMLFieldSetElement).name
        setFormData(formData => ({ ...formData, [name]: (e.target as HTMLFieldSetElement).id }))
    }


    const prevStep = () => {
        setStep(step => step - 1)
    }

    const setStepById = (id: number) => {
        setStep(id)
    }

    const currentStep = () => {
        switch (step) {

            case 1:
                return <ContactStep
                    data={formData}
                    handleChange={handleChange} />;

            case 2:
                return <DeliveryStep
                    data={formData}
                    handleChange={handleChange}
                    handleChangeFieldset={handleChangeFieldset} />;

            case 3:
                return <CheckoutOrder data={formData} />;

            default:
                return <PaymentStep
                    data={formData}
                    handleChangeFieldset={handleChangeFieldset} />
        }
    }

    return (
        <>
            {step < 4 &&
                <div className={styles.container}>

                    <HeaderStepper
                        links={links}
                        setStepById={setStepById}
                        step={step} />

                    <form
                        className={styles.wrapper}
                        onSubmit={(e) => {
                            e.preventDefault();
                            setStep(step=> step + 1)
                        }
                        }>

                        {currentStep()}

                        <ButtonBlock
                            step={step}
                            links={links}
                            prevStep={prevStep} />

                    </form>
                </div>
            }
            {step === 4 && <SuccessOrder cash={formData.payment} />}
        </>
    );
}