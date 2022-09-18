import styles from './ServiceCard.module.scss';

export default function ServiceCard({ service }) {
    
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