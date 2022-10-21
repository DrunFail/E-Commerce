import React from 'react';
import { useEffect, useState } from 'react';
import promoSlider from '../../data/promoSlider.json';
import styles from './PromoSlider.module.scss';

export default function PromoSlider() {
    const [imgActiveIndex, setImgActiveIndex] = useState(0);


    const nextPromo = () => {
        imgActiveIndex === promoSlider.length - 1 ? setImgActiveIndex(0) :
            setImgActiveIndex(prev => prev + 1)
    }

    const prevPromo = () => {
        imgActiveIndex === 0 ? setImgActiveIndex(promoSlider.length - 1) :
            setImgActiveIndex(prev => prev - 1)
    }
    useEffect(() => {
        const timer = setInterval(nextPromo, 7000)
        return () => clearInterval(timer)
    },[imgActiveIndex])
    
    

    

    return (
        <div className={styles.container }>
            {promoSlider.map((img, index) =>
                <img
                    className={styles[`${imgActiveIndex === index ? 'active' : 'offscreen'}`]}
                    key={index}
                    src={process.env.PUBLIC_URL + `${img.path}.jpg`}
                    srcSet={(
                        process.env.PUBLIC_URL + `${img.path}.jpg 1080w`,
                        process.env.PUBLIC_URL + `${img.path}-small.jpg 480w`
                    )}
                    alt='promo'
                />)}
        </div>
        );
}