import { createSlice } from '@reduxjs/toolkit'

const getInitialState = () => {
    let item = localStorage.getItem('favorite')
    if (item) {
        return JSON.parse(localStorage.favorite)
    } else {
        return []
    }
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState:
         getInitialState(),

    reducers: {
        addFavorite(state, action) {
            state.push(action.payload)
            localStorage.setItem('favorite', JSON.stringify(state))
        },
        removeFavorite(state, action) {
            const newState = state.filter((elem) => elem.id !== action.payload)
            localStorage.setItem('favorite', JSON.stringify(newState))
            return newState
        }
        
    

        }

    },



)

export const { addFavorite, removeFavorite, setFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer