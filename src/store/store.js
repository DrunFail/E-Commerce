import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import favReducer from '../features/fav/favSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        fav: favReducer
    }
})