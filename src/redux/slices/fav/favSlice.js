import { createSlice } from '@reduxjs/toolkit'

export const favSlice = createSlice({
    name: 'fav',
    initialState:
        [
            {
            "title": "смартфоны",
            "link": "/",
            "img": "/"
        },
            {
                "title": "телевизоры",
                "link": "/",
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

export default favSlice.reducer