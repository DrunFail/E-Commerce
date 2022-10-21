import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectFav } from '../../redux/slices/fav/favSlice';
import styles from './FavCategories.module.scss';


export default function FavCategories() {
    const fav = useAppSelector(selectFav)
    return (
        <div className={styles.fav}>
            <h6>избранные категории</h6>
            {fav.map((elem, index) =>
                <Link
                    key={index}
                    to={elem.link}
                >
                    {elem.title}
                </Link>
            )}
        </div>
    );
}