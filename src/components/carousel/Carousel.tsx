import React, { useState } from 'react';
import popProductData from '../../data/popProduct.json';
import ArrowLeft from '../../ui/buttons/arrow/arrowLeft/ArrowLeft';
import ArrowRight from '../../ui/buttons/arrow/arrowRight/ArrowRight';
import PopProductCard from '../popProduct/productCard/ProductCard';
import styles from './Carousel.module.scss';


interface CarouselProps {
    name: string,
    idKey: string
}


export default function Carousel({ name, idKey }: CarouselProps) {
    const [productList] = useState<PopProduct[]>(popProductData);

    const handleClick = (id: string) => {
        const slide = document.getElementById(id);
        slide?.scrollIntoView({block: 'center', behavior: 'smooth'})
    }


    const newArray = () => {
        let start = 0;
        let end = 7;
        let arr: PopProduct[][] = [];

        for (let i = 0; i < productList.length / 7; i++) {
            let a = productList.slice(start, end);
            arr = [...arr, a];
            end = end + 7;
            start = start + 7;
        }
        return arr
    }


    return (
        <div className={styles.main}>
            <h1>{name}</h1>

            <div className={styles.section}>
                    {newArray().map((elem, index) =>

                        <div className={styles.slide} id={`${idKey}${index}`}>
                            <ArrowLeft handler={handleClick} id={`${idKey}${index - 1}` } />
                            {elem.map((product, index) =>
                                <PopProductCard key={index} product={product} />
                            )}
                            <ArrowRight handler={handleClick} id={`${idKey}${index + 1}` } />
                        </div>
                    )
                    }
                </div>
        </div>
    );
}