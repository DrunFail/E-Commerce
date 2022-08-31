import styles from './ProductDetails.module.scss';

export default function ProductDetails({ keys, all }) {
    
    return (
        <div className={styles.container } >
            {keys.map((prop, index) =>
                <p key={index}>{prop.properties[0].name}{prop.properties[0].value}{prop.properties[0].measure}</p>
            )}

            {all.map((prop, index) =>
                <div className={styles.block_properties} key={index}>
                    <p className={styles.propName}>{prop.name}</p>

                    {prop.properties.map((item) =>
                        <div className={styles.contain}>
                            <p className={styles.prop_name}> {item.name} </p>
                            <span className={styles.dots}></span>
                            <p> {item.value}</p>
                        </div>
                    )}
                </div>

            )}
        </div>
        );
}