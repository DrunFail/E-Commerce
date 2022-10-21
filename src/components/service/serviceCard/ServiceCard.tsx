import React from 'react';
import styles from './ServiceCard.module.scss';

interface IDetails {
    id: number,
    name: string,
    price: string
}

interface IService {
    id: number,
    name: string,
    details: IDetails[]
}



interface IProps {
    service: IService
}



export default function ServiceCard({ service }: IProps) {
    
    return (
        <div className={styles.container }>
            <h2>{service.name }</h2>
            
                {service.details.map(detail => 
                    <div className = {styles.details}  key={detail.id }>
                        <p className={styles.title }>{detail.name}</p>
                        <p className={styles.price }>{detail.price } рублей</p>
                    </div>
                    )}
            
        </div>
        
        
        );
}