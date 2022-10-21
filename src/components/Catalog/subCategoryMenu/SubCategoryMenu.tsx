import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CategoryMenu from '../../../data/CategoryMenu.json';
import styles from './SubCategoryMenu.module.scss';

interface ICate {
    title: string,
    link: string,
    img?: string
}
interface IMain  {
    title: string,
    link: string,
    img?: string
    subcategory: ICate[]
}

export default function SubCategoryMenu() {

    const location = useLocation();

    const findCategory = CategoryMenu.find((category) =>
        category.link === location?.pathname?.slice(1)) 
           
        
   
    if (typeof findCategory === 'undefined') {
        throw new Error
    }
    const { subcategory } = findCategory     
        
    

    
    return (
        <div className={styles.container }>

        {
                subcategory.map((cate, index: number) => 
                    <div className={styles.card }>
                        <img src={process.env.PUBLIC_URL + `subCategoryImg/${cate.link}.jpg`}
                            />
                        <Link key={index} to={cate.link}>{cate.title}</Link>
                        </div>
                
           )
        }
        </div>
        );
}