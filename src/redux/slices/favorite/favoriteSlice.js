import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState:
        [],
    reducers: {
        addFavorite(state, action) {
            state.push(action.payload)
        },
        removeFavorite(state, action) {
            return state.filter((elem) => elem.id !== action.payload)
        }

        }

    },



)

export const { addFavorite, revomeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer