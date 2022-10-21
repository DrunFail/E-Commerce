import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartSvg } from '../../../assets/svg/heart.svg';

export default function FavoriteListSvgComponent() {
    return (
        <Link to='favorite'>
            <HeartSvg />
            </Link>
        );
}