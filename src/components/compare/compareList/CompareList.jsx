import styles from './CompareList.module.scss';
import { useSelector } from 'react-redux';
import EmptyCompare from '../emptyCompare/EmptyCompare';
import CompareCard from '../compareCard/CompareCard';

export default function CompareList() {
    const compare = useSelector(state => state.compare)
    return (
        <div className={styles.container }>
            <h1>список сравнения</h1>
            {!compare.length && <EmptyCompare />}
            <div>
                {compare.map(product =>
                    <CompareCard
                        key={product.id}
                        product={product}
                    />)}
            </div>
           
        </div>
        );
}