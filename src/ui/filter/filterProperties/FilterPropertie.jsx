import styles from './FilterProperties.module.scss';

import InputSection from './InputSection';

export default function FilterPropertie() {
    const properties = ['диагональ дисплея', 'объем памяти', 'оперативная память', 'камера'];
    
    return (
        <div className={styles.container }>

        {properties.map((propertie, index) => 
            <fieldset key={index }>
               
                
                    <InputSection propertie={propertie } />
                  
                </fieldset>
                )
        }
        </div>
        
        );
}