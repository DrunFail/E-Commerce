import popProduct from '../../data/popProduct.json';

export default function PopProduct() {
    return (
        <>
            {popProduct.map(product =>
                <div>
                    <img src={process.env.PUBLIC_URL + `${product.img}` } />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
)}
            </>
        );
}