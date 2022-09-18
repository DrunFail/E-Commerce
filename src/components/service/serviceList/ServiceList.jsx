import services from '../../../data/services';
import ServiceCard from '../serviceCard/ServiceCard';
import styles from './ServiceList.module.scss';

export default function ServiceList() {
    return (
        <div className={styles.container }>
            <h1>Cписок услуг</h1>
            {services.map(service => <ServiceCard key={service.id} service={service }/>) }
        </div>
        );
}