import { lazy, Suspense } from 'react';

const ForumThemeList = lazy(() => import('../components/forum/forumThemeList/ForumThemeList'))

export default function Forum() {
    return (
        <Suspense>
           <ForumThemeList />
        </Suspense>
    );
}