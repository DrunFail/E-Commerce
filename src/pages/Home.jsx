import CatalogMenu from "../components/Catalog/CatalogMenu/CatalogMenu";
import FavCategories from "../components/favCategories/FavCategories";
import PopProduct from "../components/popProduct/popProductList/PopProductList";
import PromoSlider from "../components/promoSlider/PromoSlider";

export default function Home() {
    return (
        <>
            <CatalogMenu />
            <FavCategories />
            <PromoSlider />
            <PopProduct />
        </>
    );
}