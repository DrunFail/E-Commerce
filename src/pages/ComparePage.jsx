import { lazy, Suspense } from 'react';

const CompareList = lazy(() => import('../components/compare/compareList/CompareList'));

export default function ComparePage() {
    return (
        <Suspense>
            <CompareList />
        </Suspense>
        
        );

}