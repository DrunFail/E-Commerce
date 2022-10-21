import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/cart/cartSlice'
import favReducer from '../slices/fav/favSlice'
import favoriteReducer from '../slices/favorite/favoriteSlice';
import compareReducer from '../slices/compare/compareSlice';
import userReducer from '../slices/user/userSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        fav: favReducer,
        favorite: favoriteReducer,
        compare: compareReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch