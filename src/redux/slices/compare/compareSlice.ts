import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

type Compare = {
    id: string,
    title: string,
    img: string,
    link: string
}



const getInitialState = (): Compare[] => {
    let item = localStorage.getItem('compare')
    if (item) {
        return JSON.parse(item)
    } else {
        return []
    }
}

export const compareSlice = createSlice({
    name: 'compare',
    initialState:
        getInitialState(),

    reducers: {
        addCompare(state, action) {
            state.push(action.payload)
            localStorage.setItem('compare', JSON.stringify(state))
        },
        deleteCompare(state, action) {
            const newState = state.filter((elem) => elem.id !== action.payload)
            localStorage.setItem('compare', JSON.stringify(newState))
            return newState
            
            
        }

       

    },



})

export const { addCompare, deleteCompare } = compareSlice.actions
export const selectCompare = (state: RootState) => state.compare
export default compareSlice.reducer