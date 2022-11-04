import { lazy, Suspense } from 'react';

const ThemeList = lazy(() => import('../components/forum/ThemeList/ThemeList'))

export default function Forum() {
    return (
        <Suspense>
           <ThemeList />
        </Suspense>
    );
}