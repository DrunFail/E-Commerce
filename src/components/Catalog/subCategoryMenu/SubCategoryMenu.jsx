import { Link, useLocation } from 'react-router-dom';
import CategoryMenu from '../../../data/CategoryMenu.json';
import styles from './SubCategoryMenu.module.scss';

export default function SubCategoryMenu() {
    const location = useLocation();
    
    const { subcategory } = CategoryMenu.find(category => category.link === location.pathname.slice(1))
   
    return (
        <div className={styles.container }>

        {
            subcategory.map((cate, index) => 
                <Link key={index} to={cate.link}>{cate.title}</Link>
           )
        }
        </div>
        );
}