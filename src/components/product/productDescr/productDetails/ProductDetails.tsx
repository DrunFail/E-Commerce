import React, { useState } from 'react';
import styles from './ProductDetails.module.scss';


interface ProductDetailsProps {
    keys: KeyProperties[],
    all: AllProperties[]
}



export default function ProductDetails({ keys, all }: ProductDetailsProps) {
    const [showMoreDetailed, setShowMoreDetailed] = useState(false)


    return (
        <div className={styles.container} >
            <div className={styles.wrapper}>
                {keys.map((prop, index: number) =>
                    <div className={styles.mainProperties}
                        key={index}>
                        <p >{prop.properties[0].name}</p>
                        <p>{prop.properties[0].value}{prop.properties[0].measure}</p>
                    </div>

                )}
                <button onClick={() => setShowMoreDetailed(!showMoreDetailed)}>Подробнее</button>
            </div>

            {showMoreDetailed && <>
                {
                    all.map((prop, index: number) =>
                        <div className={styles.block_properties} key={index}>
                            <p className={styles.propName}>{prop.name}</p>

                            {prop.properties.map((item, index: number) =>
                                <div key={index} className={styles.contain}>
                                    <p className={styles.prop_name}> {item.name} </p>
                                    <span className={styles.dots}></span>
                                    <p> {item.value}</p>
                                </div>
                            )}



                        </div>

                    )}</>}
        </div>
    );
}