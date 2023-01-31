import { useState, useEffect } from 'react';


interface SizePage {
    width: number,
    height: number
}

export const useResize = () => {
    const [size, setSize] = useState<SizePage | null>(null);

    const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setSize({
            width: width,
            height: height,
        });

    };


    useEffect(() => {
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (size) {
        return size.width;
    }
};