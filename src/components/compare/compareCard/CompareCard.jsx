import { Link } from 'react-router-dom';
import styles from './CompareCard.module.scss';

export default function CompareCard({ product }) {
    return (
        <div className={styles.container }>
            <img src={product.img} alt={product.title } />
            <Link to={product.link}>{product.title }</Link>

        </div>
        
        );
}