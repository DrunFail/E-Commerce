import mproducts from '../../../data/mproducts.json';
import styles from './SmartphoneList.module.scss';
import ProductCard from '../../product/productCard/ProductCard';
import Sort from '../../../ui/filter/sort/Sort';
import FilterPropertie from '../../../ui/filter/filterProperties/FilterPropertie';
import React from 'react';

export default function SmartphoneList() {
    const width = document.documentElement.clientWidth
    return (
        <div className={styles.main}>
            
            <h1>Смартфоны найдено: {mproducts.length}</h1>
            {width <= 500 || <>
                <Sort />
                <FilterPropertie />
                </>
            }

            <div className={styles.container}>
                
               
                <div className={styles.wrapper}>
                    {
                        mproducts.map((smart, index) =>
                            <ProductCard key={index} smart={smart} />
                        )
                    }
                </div>
                    
                    
              
               
            </div>
           
        </div>
    );
}