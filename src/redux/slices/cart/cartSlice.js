import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: 
          []
        
    ,
    reducers: {
        addCart(state, action) {
            state.push(action.payload)
        },
        deleteCart(state, action) {
            return state.filter((elem) => elem.id !== action.payload)
        },
        changeCountIncr(state, action) {
            const ch = state.find(elem => elem.id == action.payload)
            ch.count = ch.count + 1
        },
        changeCountDecr(state, action) {
            const ch = state.find(elem => elem.id == action.payload)
            if (ch.count == 1) {
                ch.count = 1
            } else {
                ch.count -= 1
            }
            
        }
        
    },



})

export const { addCart, deleteCart, changeCountIncr, changeCountDecr } = cartSlice.actions

export default cartSlice.reducer