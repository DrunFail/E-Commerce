import Catalog from "../components/Catalog/Catalog";
import FavCategories from "../components/favCategories/FavCategories";
import PopProduct from "../components/popProduct/PopProducts";
import PromoSlider from "../components/promoSlider/PromoSlider";

export default function Home() {
    return (
        <>
            <Catalog />
            <FavCategories />
            <PromoSlider />
            <PopProduct />
        </>
    );
}