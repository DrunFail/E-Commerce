import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

type Favorite = {
    id: string,
    title: string,
    img: string,
    link: string
}


const getInitialState = (): Favorite[] => {
    let item = localStorage.getItem('favorite')
    if (item) {
        return JSON.parse(item)
    } else {
        return []
    }
}

export const favoriteProductsSlice = createSlice({
    name: 'favoriteProducts',
    initialState:
         getInitialState(),

    reducers: {
        addItemToFavoriteProducts(state, action) {
            state.push(action.payload)
            localStorage.setItem('favorite', JSON.stringify(state))
        },
        removeItemFromFavoriteProducts(state, action) {
            const newState = state.filter((elem) => elem.id !== action.payload)
            localStorage.setItem('favorite', JSON.stringify(newState))
            return newState
        }
        }
    },
)

export const { addItemToFavoriteProducts, removeItemFromFavoriteProducts } = favoriteProductsSlice.actions
export const selectFavorite = (state: RootState) => state.favoriteProducts
export default favoriteProductsSlice.reducer