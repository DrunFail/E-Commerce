import smartphoneList from '../../../data/smartphoneList.json';
import './list.css';

export default function SmartphoneList() {
    return (
        <div className='containerr'>
            {
                smartphoneList.map((smart, index) =>
                    <div className='product-card' key={index}>
                        <img className='product-img'src={smart.img} alt='image' />
                        <p className='product-title'>{smart.title}</p>
                        <p className='product-price'>{smart.price}</p>
                        <button className='in-cart'>v korzinu</button>
                    </div>
                )
            }
        </div>
    );
}