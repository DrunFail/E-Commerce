import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/cart/cartSlice'
import favReducer from '../slices/fav/favSlice'
import favoriteReducer from '../slices/favorite/favoriteSlice';
import compareReducer from '../slices/compare/compareSlice';
import userReducer from '../slices/user/userSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        fav: favReducer,
        favorite: favoriteReducer,
        compare: compareReducer,
        user: userReducer
    }
})