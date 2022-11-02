import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Forum from '../../pages/Forum';
import ForumThemeDetail from './ThemeDetail/ForumThemeDetail';

export default function ForumRoutes() {
    return (
        <Routes>
                <Route index element={<Forum />} />
                <Route path=':forumId' element={<ForumThemeDetail />} />
        </Routes>
    );
}