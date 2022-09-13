import { Link } from 'react-router-dom';
import styles from './CompareCard.module.scss';
import { useDispatch } from 'react-redux';
import { deleteCompare } from '../../../redux/slices/compare/compareSlice';

export default function CompareCard({ product }) {
    const dispatch = useDispatch();
    return (
        <div className={styles.container }>
            <img src={product.img} alt={product.title } />
            <Link to={product.link}>{product.title}</Link>
            <button onClick={() => dispatch(deleteCompare(product.id)) }>delete</button>

        </div>
        
        );
}