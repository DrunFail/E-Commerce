import { lazy, Suspense } from 'react';

const ForumThemeList = lazy(() => import('../components/forum/ThemeList/ForumThemeList'))

export default function Forum() {
    return (
        <Suspense>
           <ForumThemeList />
        </Suspense>
    );
}