import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Delivery from './pages/Delivery';
import './styles/index.scss';
import store from './redux/store/store';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import Promo from './pages/Promo';
import Services from './pages/Services';
import Forum from './pages/Forum';
import Layout from './components/Layout/Layout';
import Smartphones from './pages/Catalog/smartgadzhets/Smartphones';
import AksForPlansh from './pages/Catalog/smartgadzhets/AksForPlansh';
import AksForSmart from './pages/Catalog/smartgadzhets/AksForSmart';
import SmartClock from './pages/Catalog/smartgadzhets/SmartClock';
import NotFound from './pages/NotFound';
import LoginPage from './pages/authenticate/LoginPage';
import RegistrationPage from './pages/authenticate/RegistrationPage';
import ForumThemeDetail from './components/forum/forumThemeDetail/ForumThemeDetail';
import PromoDetails from './pages/PromoDetails';
import ProfileOrder from './pages/profile/ProfileOrder';
import ProfileSettings from './pages/profile/ProfileSettings';
import Favorite from './pages/Favorite';
import Compare from './pages/Compare';
import OrderStepper from './components/orderPlace/orderStepper/OrderStepper';
import SubCategoryMenu from './components/Catalog/subCategoryMenu/SubCategoryMenu'
import ProductDescr from './components/product/productDescr/ProductDescr';
import ShopsList from './components/shopsList/shopsList/ShopsList';
import PaymentForm from './components/orderPlace/PaymentStep/PaymentForm/PaymentForm';
import CartList from './components/cart/CartList/CartList';
import FavoriteProductsList from './components/favoriteProducts/FavoriteProductsList/FavoriteProductsList';
import CompareList from './components/compare/compareList/CompareList';

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
                        <Route path='shops' element={<ShopsList />} />
                        <Route path='favorite' element={<FavoriteProductsList />} />
                        <Route path='compare' element={<CompareList />} />
                        <Route path='forum'>
                            <Route index element={<Forum />} />
                            <Route path=':forumId' element={<ForumThemeDetail />} />
                        </Route>
                        <Route path='order' element={<OrderStepper />} />
                        <Route path='payment' element={<PaymentForm /> } />
                        <Route path='cart' >
                            <Route index element={<CartList />} />
                            

                        </Route>
                        <Route path='orders' element={<ProfileOrder />} />
                        <Route path='profile' element={<ProfileSettings />} />
                        <Route path='smartfony-i-gadzhety'  >
                            <Route index element={<SubCategoryMenu />} />
                            <Route path='smartfony' >
                                <Route index element={<Smartphones />} />
                                <Route path=':smartfonyId' element={<ProductDescr/>} />
                            </Route>
                            <Route path='planshety' element={<Smartphones />} />
                            <Route path='smart-chasy' element={<SmartClock />} />
                            <Route path='aksess-dlja-smartfonov' element={<AksForSmart />} />
                            <Route path='aksess-dlja-planshetov' element={<AksForPlansh />} />
                        </Route>
                        <Route path='televizory' element={<SubCategoryMenu />} />
                        <Route path='krupnaya-bytovaja-tehnika' element={<SubCategoryMenu />} />
                        <Route path='notebooks' element={<SubCategoryMenu />} />
                        <Route path='avtotovary' element={<SubCategoryMenu />} />
                        <Route path='stroitelny-instrument' element={<SubCategoryMenu />} />
                        <Route path='sadovaja-tehnika' element={<SubCategoryMenu />} />
                        <Route path='melkaja-bytovaja-tehnika' element={<SubCategoryMenu />} />
                        <Route path='books' element={<SubCategoryMenu />} />
                        <Route path='posuda' element={<SubCategoryMenu />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>

                </Routes>
            </React.StrictMode>
        </BrowserRouter>
    </Provider >
);

