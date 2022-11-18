import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'


interface IAmount {
    cartItemId: string,
    amount: number
}


const getInitialState = (): ShoppingCartItem[] => {
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
        addItemToCart(state, action: PayloadAction<ShoppingCartItem>) {
            state.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state))
        },


        deleteItemFromCart(state, action: PayloadAction<string>) {
            const newState = state.filter((elem: ShoppingCartItem) => elem.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(newState))
            return newState
        },


        incrementQuantityItems(state, action: PayloadAction<string>) {
            const ch = state.find((elem: ShoppingCartItem) => elem.id == action.payload)
            if (ch) {
                ch.count += 1
                localStorage.setItem('cart', JSON.stringify(state))
            }
            
        },


        decrementQuantityItems(state, action: PayloadAction<string>) {
            const ch = state.find((elem: ShoppingCartItem) => elem.id == action.payload)
            if (ch) {
                if (ch.count == 1) {
                    ch.count = 1
                } else {
                    ch.count -= 1
                }
                localStorage.setItem('cart', JSON.stringify(state))

            }
        },


        changeQuantityItemsAmount(state, action: PayloadAction<IAmount>) {
            const ch = state.find((elem: ShoppingCartItem) => elem.id == action.payload.cartItemId)
            if (ch) {
                ch.count = action.payload.amount

            }
            
        }
        
    },



})

export const { addItemToCart,
    deleteItemFromCart,
    incrementQuantityItems,
    decrementQuantityItems,
    changeQuantityItemsAmount,
   
} = cartSlice.actions

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer