import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ThemeDetail from './ThemeDetail/ThemeDetail';
import ThemeList from './ThemeList/ThemeList';
import ThemeUser from './ThemeUser/ThemeUser';

export default function ForumRoutes() {
    return (
        <Routes>
            <Route index element={<ThemeList />} />
            <Route path=':forumId'>
                <Route index element={<ThemeDetail />} />
                <Route path=':themeId' element={<ThemeUser />} />
            </Route>


        </Routes>
    );
}