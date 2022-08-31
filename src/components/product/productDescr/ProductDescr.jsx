import styles from './ProductDescr.module.scss';
import huawei from '../../../data/phones/huawei.json';
import { useState } from 'react';

export default function ProductDescr() {
    const [imageIndex, setImageIndex] = useState(0);
    const [menuIndex, setMenuIndex] = useState(0);
    const menuChoices = ['характеристики', 'отзывы', 'обзоры', 'задать вопрос'];

    const mainProps = huawei[0].body.properties.key;
    const factoryProps = huawei[0].body.properties.all;
    const images = huawei[0].body.imagesBig

    const nextImage = () => {
        setImageIndex(imageIndex == images.length - 1 ? 0 : imageIndex + 1)
    }
    return (
        <div className={styles.container}>
            <div className={styles.images}>
                {images.map((image, index) =>
                    <div key={index}>
                        <img className={styles[imageIndex == index ? 'active' : 'offscreen']} key={index} src={`http://img.mvideo.ru/${image}`} />

                    </div>

                )}
                <div className={styles.small}>
                    {images.map((image, index) =>

                        <img onClick={() => setImageIndex(index)} className={styles[imageIndex == index ? 'activeSmall' : 'offscreenSmall']} key={index} src={`http://img.mvideo.ru/Big/small_pic/65/${image.slice(4)}`} />
                    )}
                </div>
            </div>
            <div className={styles.action}>
                <h1 className={styles.title}>{huawei[0].body.name}</h1>
                <p className={styles.price}>{huawei[0].body.price} P</p>
                <div className={styles.container_buttons }>
                <button className={styles.in_cart}>в корзину</button>
                <button className={styles.favorite}>fav</button>
                    <button className={styles.compare}>srav</button>
                    </div>
            </div>
            <div className={styles.menu}>
                {menuChoices.map((choice, index) =>
                    <p onClick={() => setMenuIndex(index)} className={styles[menuIndex == index ? 'menuChoice_active' : 'menuChoice']}>{choice}</p>
                )}
            </div>
            <div className={styles[menuIndex == 0 ? 'properties' : 'offscreen']}>
                {mainProps.map((prop, index) =>
                    <p key={index}>{prop.properties[0].name}  {prop.properties[0].value}{prop.properties[0].measure}</p>
                )}

                {factoryProps.map((prop, index) =>
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
        </div>
    );
}