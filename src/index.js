import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Delivery from './pages/Delivery';
import './styles/index.scss';

import Home from './pages/Home';
import Promo from './pages//Promo';
import Services from './pages/Services';
import Shops from './pages/Shops';
import Forum from './pages/Forum';
import Layout from './components/Layout/Layout';
import SmartGadzhet from './pages/Catalog/smartgadzhets/SmartGadzhet';
import Televizory from './pages/Catalog/Televizory';
import KBT from './pages/Catalog/KBT';
import Notebooks from './pages/Catalog/Notebooks';
import Avto from './pages/Catalog/Avto';
import StroiTools from './pages/Catalog/StroiTools';
import Sadovaja from './pages/Catalog/Sadovaja';
import MBT from './pages/Catalog/MBT';
import Books from './pages/Catalog/Books';
import Posuda from './pages/Catalog/Posuda';
import Smartphones from './pages/Catalog/smartgadzhets/Smartphones';
import Planshety from './pages/Catalog/smartgadzhets/Planshety';
import AksForPlansh from './pages/Catalog/smartgadzhets/AksForPlansh';
import AksForSmart from './pages/Catalog/smartgadzhets/AksForSmart';
import SmartClock from './pages/Catalog/smartgadzhets/SmartClock';

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
                    <Route path='smartfony-i-gadzhety' >
                        <Route index element={<SmartGadzhet />}/>
                        <Route path='smartfony' element={<Smartphones />} />
                        <Route path='planshety' element={<Planshety/> } />
                        <Route path='smart-chasy' element={<SmartClock /> } />
                        <Route path='aksess-dlja-smartfonov' element={<AksForSmart/> } />
                        <Route path='aksess-dlja-planshetov' element={<AksForPlansh /> } />
                    </Route>
                    <Route path='televizory' element={<Televizory />} />
                    <Route path='krupnaya-bytovaja-tehnika' element={<KBT />} />
                    <Route path='notebooks' element={<Notebooks />} />
                    <Route path='avtotovary' element={<Avto />} />
                    <Route path='stroitelny-instrument' element={<StroiTools />} />
                    <Route path='sadovaja-tehnika' element={<Sadovaja />} />
                    <Route path='melkaja-bytovaja-tehnika' element={<MBT />} />
                    <Route path='books' element={<Books />} />
                    <Route path='posuda' element={<Posuda />} />
                </Route>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);

