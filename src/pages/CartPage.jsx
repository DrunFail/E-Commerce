import { lazy, Suspense } from 'react';

const CartList = lazy(() => import('../components/cart/CartList/CartList'));

export default function CartPage() {
    return (<>
        <Suspense>
            <CartList />
            </Suspense>
        
        </>
        
        );
}