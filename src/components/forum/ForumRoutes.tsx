import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Forum from '../../pages/Forum';
import ThemeDetail from './ThemeDetail/ThemeDetail';

export default function ForumRoutes() {
    return (
        <Routes>
                <Route index element={<Forum />} />
                <Route path=':forumId' element={<ThemeDetail />} />
        </Routes>
    );
}