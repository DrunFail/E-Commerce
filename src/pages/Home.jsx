import FavCategories from "../components/favCategories/FavCategories";
import PopProduct from "../components/popProduct/PopProducts";
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