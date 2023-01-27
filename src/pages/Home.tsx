import React from "react";
import FavCategories from "../components/favCategories/FavCategories";
import PopProduct from "../components/carousel/Carousel";
import PromoSlider from "../components/promoSlider/PromoSlider";

export default function Home() {
    return (
        <div style={{display: 'grid'} }>
            <FavCategories />
            <PromoSlider />
            <PopProduct name={'популярные товары'} idKey='pop'/>
            <PopProduct name={'хиты продаж' } idKey='hit'/>
        </div>
    );
}