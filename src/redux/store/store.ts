import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/cart/cartSlice'
import favoriteCategoriesReducer from '../slices/fav/favoriteCategoriesSlice'
import favoriteProductsReducer from '../slices/favorite/favoriteProductsSlice';
import compareReducer from '../slices/compare/compareSlice';
import userReducer from '../slices/user/userSlice';

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