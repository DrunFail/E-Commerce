import React from 'react';
import { useState } from 'react';
import styles from './ImageBlock.module.scss';

interface ImageBlockProps {
    images: string[]
}


export default function ImageBlock({ images }: ImageBlockProps) {
    const [imageIndex, setImageIndex] = useState(0);


    return (
        <div className={styles.container}>
            <figure className={styles.mainImg}>
                    <img
                        src={`http://img.mvideo.ru/${images[imageIndex]}`}
                        alt='product' />
            </figure>

            <div className={styles.small}>
                {images.map((image, index) =>
                    <img
                        onClick={() => setImageIndex(index)}
                        className={styles[imageIndex === index ? 'activeSmall' : 'offscreenSmall']}
                        key={index}
                        src={`http://img.mvideo.ru/Big/small_pic/65/${image.slice(4)}`}
                        alt='small product' />
                )}
            </div>
        </div>
    );
}