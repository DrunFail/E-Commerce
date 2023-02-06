import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../redux/store/store'
import { CompareItem } from '../interfaces/interfaces'


const initialState = (): CompareItem[] => {
    let item = localStorage.getItem('compare')
    if (item) {
        return JSON.parse(item)
    } else {
        return []
    }
}

export const compareSlice = createSlice({
    name: 'compare',
    initialState,

    reducers: {
        addCompareItem: {
            reducer(state, action: PayloadAction<CompareItem>) {
                state.push(action.payload)
                localStorage.setItem('compare', JSON.stringify(state))
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

        removeCompareItem(state, action: PayloadAction<string>) {
            const newState = state.filter((elem) => elem.id !== action.payload)
            localStorage.setItem('compare', JSON.stringify(newState))
            return newState
        }
    },
})

export const { addCompareItem, removeCompareItem } = compareSlice.actions
export const selectCompare = (state: RootState) => state.compare
export default compareSlice.reducer