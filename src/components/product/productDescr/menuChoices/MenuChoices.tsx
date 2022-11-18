import React, { useState } from 'react';
import ProductDetails from '../productDetails/ProductDetails';
import styles from './MenuChoices.module.scss';

interface MenuChoicesProps {
    keys: KeyProperties[],
    all: AllProperties[]
}

export default function MenuChoices({ keys, all }: MenuChoicesProps) {
    const [menuIndex, setMenuIndex] = useState(0);
    const menuChoices = ['характеристики', 'отзывы', 'обзоры', 'задать вопрос'];

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                {menuChoices.map((choice, index) =>
                    <p
                        key={index}
                        onClick={() => setMenuIndex(index)}
                        className={styles[menuIndex === index ? 'menuChoice_active' : 'menuChoice']}
                    >
                        {choice}
                    </p>
                )}


            </div>
            {menuIndex === 0 && <ProductDetails keys={keys} all={all} />}
        </div>

    );
}