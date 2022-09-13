import { createSlice } from '@reduxjs/toolkit'

const getInitialState = () => {
    let item = localStorage.getItem('cart')
    if (item) {
        return JSON.parse(localStorage.cart)
    } else {
        return []
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: 
          getInitialState()
        
    ,
    reducers: {
        addCart(state, action) {
            state.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state))
        },
        deleteCart(state, action) {
            const newState = state.filter((elem) => elem.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(newState))
            return newState
        },
        changeCountIncr(state, action) {
            const ch = state.find(elem => elem.id == action.payload)
            ch.count += 1
            localStorage.setItem('cart', JSON.stringify(state))
        },
        changeCountDecr(state, action) {
            const ch = state.find(elem => elem.id == action.payload)
            if (ch.count == 1) {
                ch.count = 1
            } else {
                ch.count -= 1
            }
            localStorage.setItem('cart', JSON.stringify(state))
            
        },
        changeCountAmount(state, action) {
            const ch = state.find(elem => elem.id == action.payload.id)
            
            ch.count = action.payload.amount
        }
        
    },



})

export const { addCart,
    deleteCart,
    changeCountIncr,
    changeCountDecr,
    changeCountAmount,
   
} = cartSlice.actions

export default cartSlice.reducer