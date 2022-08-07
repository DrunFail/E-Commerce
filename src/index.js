import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Delivery from './pages/Delivery';

import Home from './pages/Home';
import Promo from './pages/Promo';
import Services from './pages/Services';
import Shops from './pages/Shops';
import Forum from './pages/Forum';
import Layout from './components/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='promo' element={<Promo />} />
                    <Route path='services' element={<Services />} />
                    <Route path='delivery' element={<Delivery />} />
                    <Route path='shops' element={<Shops />} />
                    <Route path='forum' element={<Forum />} />
                </Route>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);

