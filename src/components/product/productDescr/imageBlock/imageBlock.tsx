import React from 'react';
import { useState } from 'react';
import styles from './ImageBlock.module.scss';

interface ImageBlockProps {
    images: string[]
}


export default function ImageBlock({ images }: ImageBlockProps) {
    const [imageIndex, setImageIndex] = useState(0);

    const nextImage = () => {
        setImageIndex(imageIndex == images.length - 1 ? 0 : imageIndex + 1)
    }

    return (
        <div >
            {images.map((image, index) =>
                <div key={index}>
                    <img className={styles[imageIndex == index ? 'active' : 'offscreen']} key={index} src={`http://img.mvideo.ru/${image}`} />

                </div>

            )}
            <div className={styles.small}>
                {images.map((image, index) =>

                    <img onClick={() => setImageIndex(index)} className={styles[imageIndex == index ? 'activeSmall' : 'offscreenSmall']} key={index} src={`http://img.mvideo.ru/Big/small_pic/65/${image.slice(4)}`} />
                )}
            </div>
        </div>
        );
}