import React from "react";
import FavCategories from "../components/favCategories/FavCategories";
import PopProduct from "../components/carousel/Carousel";
import PromoSlider from "../components/promoSlider/PromoSlider";
import styles from './Home.module.scss';


export default function Home() {
    return (
        <div className={styles.container }>
            <FavCategories />
            <PromoSlider />
            <PopProduct name={'популярные товары'} idKey='pop'/>
            <PopProduct name={'хиты продаж' } idKey='hit'/>
        </div>
    );
}