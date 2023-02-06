import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../redux/store/store'


const initialState = (): FavoriteProductItem[] => {
    let item = localStorage.getItem('favorite')
    if (item) {
        return JSON.parse(item)
    } else {
        return []
    }
}


export const favoriteProductsSlice = createSlice({
    name: 'favoriteProducts',
    initialState: initialState,

    reducers: {

        addFavoriteItem: {
            reducer(state, action: PayloadAction<FavoriteProductItem>) {
                state.push(action.payload)
                localStorage.setItem('favorite', JSON.stringify(state))
            },
            prepare(title, img, link) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        img,
                        link
                    }
                }
            }
        },
        removeFavoriteItem(state, action: PayloadAction<string>) {
            const newState = state.filter((elem) => elem.id !== action.payload)
            localStorage.setItem('favorite', JSON.stringify(newState))
            return newState
        }
    }
})

export const { addFavoriteItem, removeFavoriteItem } = favoriteProductsSlice.actions

export const selectFavorite = (state: RootState) => state.favoriteProducts

export default favoriteProductsSlice.reducer