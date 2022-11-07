import React from 'react';
import { useParams } from 'react-router-dom';
import promoList from '../../../data/promoList.json';
import styles from './PromoListDetails.module.scss';

export default function PromoDetails() {
    const params = useParams();
   
    const findPromo = promoList.find(promo => promo.translit == params.promoId)


    if (typeof findPromo === 'undefined') {
        throw new Error
    }
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>{findPromo.name}</h1>
                <p className={styles.validity}>срок действия: {findPromo.validity.start} - {findPromo.validity.end}</p>
                <p className={styles.value}>алыфаоло аоалаодалфаджл оао аоа оалоад аоыало ао ао лдао длао ао ао аовыджао дао аоадлоаылао ао аоыдалоыд лаоыва аоыджвало аывлао ждаодыфаолыдаоыдалоыадлоадлыаодылаоылао ао аоыдалоыдалоывда оаоывоваололввол оволаолво авло влоавлоа лыоаыло аылао лыао лывао
                </p>
            </div>
        );

    
    
}