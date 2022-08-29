import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Delivery from './pages/Delivery';
import './styles/index.scss';
import store from './redux/store/store';
import { Provider } from 'react-redux';

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
import ProductPage from './pages/Catalog/ProductPage';
import Cart from './pages/Cart';
import Order from './components/cart/Order/Order';
import NotFound from './pages/NotFound';
import LoginPage from './pages/authenticate/LoginPage';
import RegistrationPage from './pages/authenticate/RegistrationPage';
import ForumThemeDetail from './components/forum/forumThemeDetail/ForumThemeDetail';
import PromoDetails from './pages/PromoDetails';
import ProfileOrder from './pages/profile/ProfileOrder';
import ProfileSettings from './pages/profile/ProfileSettings';
import Favorite from './pages/Favorite';
import Compare from './pages/Compare';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path='login' element={<LoginPage />} />
                        <Route path='registration' element={<RegistrationPage />} />
                        <Route path='promo'>
                            <Route index element={<Promo />} />
                            <Route path=':promoId' element={<PromoDetails />} />
                        </Route>
                        <Route path='services' element={<Services />} />
                        <Route path='delivery' element={<Delivery />} />
                        <Route path='shops' element={<Shops />} />
                        <Route path='favorite' element={<Favorite />} />
                        <Route path='compare' element={<Compare />} />
                        <Route path='forum'>
                            <Route index element={<Forum />} />
                            <Route path=':forumId' element={<ForumThemeDetail />} />
                        </Route>
                        <Route path='cart' >
                            <Route index element={<Cart />} />
                            <Route path='order' element={<Order />} />

                        </Route>
                        <Route path='orders' element={<ProfileOrder />} />
                        <Route path='profile' element={<ProfileSettings />} />
                        <Route path='smartfony-i-gadzhety'  >
                            <Route index element={<SmartGadzhet />} />
                            <Route path='smartfony' >
                                <Route index element={<Smartphones />} />
                                <Route path=':smartfonyId' element={<ProductPage />} />
                            </Route>
                            <Route path='planshety' element={<Planshety />} />
                            <Route path='smart-chasy' element={<SmartClock />} />
                            <Route path='aksess-dlja-smartfonov' element={<AksForSmart />} />
                            <Route path='aksess-dlja-planshetov' element={<AksForPlansh />} />
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
                        <Route path="*" element={<NotFound />} />
                    </Route>

                </Routes>
            </React.StrictMode>
        </BrowserRouter>
    </Provider >
);

