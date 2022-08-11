import styles from './ProductCard.module.scss';

export default function ProductCard({ smart }) {
    const proper = smart.propertiesPortion;
    const display = proper.find(obj => obj.id == 30848201) 
    const displayTechno = proper.find(obj => obj.id == 30852907 ) 
    const cpu = proper.find(obj => obj.id == 637 || obj.id == 619180) 
    const memory = proper.find(obj => obj.id == 30852805)

   
    return (
        <div className={styles.product_card} >
            <img
                className={styles.product_img}
                src={`http://img.mvideo.ru/${smart.image}`}
                alt='image'
            />
            <a
                href={`smartfony/${smart.nameTranslit}`}
                className={styles.product_title} >
                {smart.name}
            </a>
            <div className={styles.properties }>
                <p >{display.name}:{display.value}</p>
                <p >{displayTechno ? `${displayTechno.name}:${displayTechno.value}` : null}</p>

                <p className={styles.cpu}>{cpu ? cpu.name : null}:{cpu ? cpu.value : null}</p>
                <p >{memory ? `${memory.name}:${memory.value}${memory.measure}` : null}</p>

            </div>
            <p
                className={styles.product_price} >
                {smart.price}
            </p>
            <button className={styles.in_cart}>v korzinu</button>
        </div>
    );
}