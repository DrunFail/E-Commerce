import { Link, useLocation } from 'react-router-dom';
import CategoryMenu from '../../../data/CategoryMenu.json';
export default function SubCategoryMenu() {
    const location = useLocation();
    
    const { subcategory } = CategoryMenu.find(category => category.link === location.pathname.slice(1))
   
    return (
        <>

        {
            subcategory.map((cate, index) => <div key={index} >
                <Link to={cate.link}>{cate.title}</Link>
            </div>)
        }
        </>
        );
}