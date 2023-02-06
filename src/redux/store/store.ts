import { configureStore } from '@reduxjs/toolkit'
import favoriteCategoriesReducer from '../slices/fav/favoriteCategoriesSlice'
import compareReducer from '../../components/compare/redux/compareSlice';
import userReducer from '../slices/user/userSlice';
import cartReducer from '../../components/cart/redux/cartSlice';
import favoriteProductsReducer from '../../components/favoriteProducts/redux/favoriteProductsSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favoriteCategories: favoriteCategoriesReducer,
        favoriteProducts: favoriteProductsReducer,
        compare: compareReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch