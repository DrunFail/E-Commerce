import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/store/store';
import './styles/index.scss';

import SubCategoryMenu from './components/catalog/subCategoryMenu/SubCategoryMenu';
import FavoriteProductsList from './components/favoriteProducts';
import ForumRoutes from './components/forum';
import Layout from './components/Layout/Layout';
import OrderStepper from './components/orderPlace';
import PaymentForm from './components/orderPlace/components/PaymentStep/PaymentForm/PaymentForm';
import ProductDescr from './components/product/productDescr/ProductDescr';
import ProductList from './components/product/productList/ProductList';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import ShopsList from './components/shopsList/shopsList/ShopsList';
import Home from './pages/Home';
import  CartList  from './components/cart/';
import CompareList from './components/compare';
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import ServiceList from './components/service/serviceList/ServiceList';
import PromoListDetails from './components/promo/components/promoListDetails/PromoListDetails';
import PromoList from './components/promo';
import Login from './components/authenticate/login/Login';
import Registration from './components/authenticate/registration/Registration';
import OrdersList from './components/orders';
import Profile from './components/profileSettings/Profile';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path='login' element={<Login />} />
                        <Route path='registration' element={<Registration />} />
                        <Route path='promo'>
                            <Route index element={<PromoList />} />
                            <Route path=':promoId' element={<PromoListDetails />} />
                        </Route>
                        <Route path='services' element={<ServiceList />} />
                        <Route path='shops' element={<ShopsList />} />
                        <Route path='favorite' element={<FavoriteProductsList />} />
                        <Route path='compare' element={<CompareList />} />
                        <Route path='forum/*' element={<ForumRoutes /> } />
                        
                        <Route path='order' element={<OrderStepper />} />
                        <Route path='payment' element={<PaymentForm /> } />
                        <Route path='cart' >
                            <Route index element={<CartList />} />
                        </Route>
                        <Route path='orders' element={<OrdersList />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='smartfony-i-gadzhety'  >
                            <Route index element={<SubCategoryMenu />} />
                            <Route path='smartfony' >
                                <Route index element={<ProductList />} />
                                <Route path=':smartfonyId' element={<ProductDescr/>} />
                            </Route>
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
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </React.StrictMode>
        </BrowserRouter>
    </Provider >
);

