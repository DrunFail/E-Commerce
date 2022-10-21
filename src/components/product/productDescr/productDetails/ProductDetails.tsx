import React from 'react';
import styles from './ProductDetails.module.scss';

interface ProductDetailsProps {
    keys: any,
    all: any
}


export default function ProductDetails({ keys, all }: ProductDetailsProps) {
    
    return (
        <div className={styles.container } >
            {keys.map((prop: any, index: number) =>
                <p key={index}>{prop.properties[0].name}{prop.properties[0].value}{prop.properties[0].measure}</p>
            )}

            {all.map((prop: any, index: number) =>
                <div className={styles.block_properties} key={index}>
                    <p className={styles.propName}>{prop.name}</p>

                    {prop.properties.map((item: any, index: number) =>
                        <div key={index} className={styles.contain}>
                            <p className={styles.prop_name}> {item.name} </p>
                            <span className={styles.dots}></span>
                            <p> {item.value}</p>
                        </div>
                    )}
                </div>

            )}
        </div>
        );
}