import { Link } from 'react-router-dom';

export default function SuccessOrder() {
    return (
        
        <div>
            <p>
                ваш заказ успешно оформлен и принят в обработку.
                спасибо за покупку!
            </p> 
            <Link to='/'>home</Link>
        </div>);
}