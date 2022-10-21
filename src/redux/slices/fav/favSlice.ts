import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'




export const favSlice = createSlice({
    name: 'fav',
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
        addFav(state, action) {
            state.push(action.payload)
        },
        deleteFav(state, action) {
            return state.filter((elem) => elem.title !== action.payload)
        }

    },



})

export const { addFav, deleteFav } = favSlice.actions
export const selectFav = (state: RootState) => state.fav
export default favSlice.reducer