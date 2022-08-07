import promoSlider from '../../data/promoSlider.json';

export default function PromoSlider() {
    return (
        <div>
            {promoSlider.map(img => <img src={process.env.PUBLIC_URL + `${img.path}` } />) }
            </div>
        );
}