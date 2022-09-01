import { createSlice } from '@reduxjs/toolkit'

export const compareSlice = createSlice({
    name: 'compare',
    initialState:
        []

    ,
    reducers: {
        addCompare(state, action) {
            state.push(action.payload)
        },
        deleteCompare(state, action) {
            return state.filter((elem) => elem.title !== action.payload)
        }

    },



})

export const { addCompare, deleteCompare } = compareSlice.actions

export default compareSlice.reducer