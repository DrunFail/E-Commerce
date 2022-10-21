import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CompareSvg } from '../../../assets/svg/compare.svg';


export default function CompareSvgComponent() {
    return (
        <Link to='compare'>
            <CompareSvg />
        </Link>

    );
}