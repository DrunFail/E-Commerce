import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'




export const favoriteCategoriesSlice = createSlice({
    name: 'favoriteCategories',
    initialState:
        [
            {
            "title": "смартфоны",
                "link": "smartfony-i-gadzhety/smartfony",
            "img": "/"
        },
            {
                "title": "телевизоры",
                "link": "televizory",
                "img": "/"
            }
        ]

    ,
    reducers: {
        addItemToFavoriteCategories(state, action) {
            state.push(action.payload)
        },


        removeItemFromFavoriteCategories(state, action) {
            return state.filter((elem) => elem.title !== action.payload)
        }
    },
})

export const { addItemToFavoriteCategories, removeItemFromFavoriteCategories } = favoriteCategoriesSlice.actions
export const selectFav = (state: RootState) => state.favoriteCategories
export default favoriteCategoriesSlice.reducer