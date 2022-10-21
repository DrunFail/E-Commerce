import React from 'react';
import services from '../../../data/services.json';
import ServiceCard from '../serviceCard/ServiceCard';
import styles from './ServiceList.module.scss';

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

export default function ServiceList() {
    return (
        <div className={styles.container }>
            <h1>Cписок услуг</h1>
            {services.map((service: IService) => <ServiceCard key={service.id} service={service }/>) }
        </div>
        );
}