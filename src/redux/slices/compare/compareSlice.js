import { createSlice } from '@reduxjs/toolkit'

const getInitialState = () => {
    let item = localStorage.getItem('compare')
    if (item) {
        return JSON.parse(localStorage.compare)
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

export const { addCompare, deleteCompare, setCompare } = compareSlice.actions

export default compareSlice.reducer