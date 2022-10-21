import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeSvg } from '../../../assets/svg/home.svg';


export default function HomeSvgComponent() {
    return (
        <Link to='/'>
            <HomeSvg />
        </Link>

    );
}