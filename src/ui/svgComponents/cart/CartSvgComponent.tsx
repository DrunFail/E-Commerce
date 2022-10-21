import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartSvg } from '../../../assets/svg/cart.svg';

export default function CartSvgComponent() {
    return (
        <Link to='cart'>
            <CartSvg />
        </Link>
        );
}