import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectFav } from '../../redux/slices/fav/favSlice';
import './grid.css';


export default function FavCategories() {
    const fav = useAppSelector(selectFav)
    return (
        <div id='fav'>
            
           <h6>избранные категории</h6>
            {fav.map((elem, index) => <Link to={elem.link } key={index }>{elem.title}</Link>)}
        </div>
    );
}