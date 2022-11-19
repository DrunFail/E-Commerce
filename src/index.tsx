import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Delivery from './pages/Delivery';
import { store } from './redux/store/store';
import './styles/index.scss';

import SubCategoryMenu from './components/catalog/subCategoryMenu/SubCategoryMenu';
import FavoriteProductsList from './components/favoriteProducts/FavoriteProductsList/FavoriteProductsList';
import Layout from './components/Layout/Layout';
import OrderStepper from './components/orderPlace/orderStepper/OrderStepper';
import PaymentForm from './components/orderPlace/PaymentStep/PaymentForm/PaymentForm';
import ProductDescr from './components/product/productDescr/ProductDescr';
import ShopsList from './components/shopsList/shopsList/ShopsList';
import LoginPage from './pages/authenticate/LoginPage';
import RegistrationPage from './pages/authenticate/RegistrationPage';
import AksForPlansh from './pages/Catalog/smartgadzhets/AksForPlansh';
import AksForSmart from './pages/Catalog/smartgadzhets/AksForSmart';
import SmartClock from './pages/Catalog/smartgadzhets/SmartClock';
import Smartphones from './pages/Catalog/smartgadzhets/Smartphones';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProfileOrder from './pages/profile/ProfileOrder';
import ProfileSettings from './pages/profile/ProfileSettings';
import Promo from './pages/Promo';
import PromoDetails from './pages/PromoDetails';
import Services from './pages/Services';
import CartPage from './pages/CartPage';
import ComparePage from './pages/ComparePage';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import ForumRoutes from './components/forum/ForumRoutes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <ScrollToTop />
                
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
                        <Route path='compare' element={<ComparePage />} />
                        <Route path='forum/*' element={<ForumRoutes /> } />
                        
                        <Route path='order' element={<OrderStepper />} />
                        <Route path='payment' element={<PaymentForm /> } />
                        <Route path='cart' >
                            <Route index element={<CartPage />} />
                            

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

