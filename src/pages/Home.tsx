import React from "react";
import FavCategories from "../components/favCategories/FavCategories";
import PopProduct from "../components/popProduct/popProductList/PopProductList";
import PromoSlider from "../components/promoSlider/PromoSlider";

export default function Home() {
    return (
        <>
            <FavCategories />
            <PromoSlider />
            <PopProduct />
        </>
    );
}