import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Forum from '../../pages/Forum';
import ThemeDetail from './ThemeDetail/ThemeDetail';
import ThemeUser from './ThemeUser/ThemeUser';

export default function ForumRoutes() {
    return (
        <Routes>
            <Route index element={<Forum />} />
            <Route path=':forumId'>
                <Route index element={<ThemeDetail />} />
                <Route path=':themeId' element={<ThemeUser />} />
            </Route>


        </Routes>
    );
}