import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

interface IElem {
    title: string,
    price: number,
    count: number,
    id: string
}

interface IAmount {
    id: string,
    amount: number
}

interface IAddCart {
    id: string,
    title: string,
    count: number,
    price: number
}


const getInitialState = (): IAddCart[] => {
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
        addItemToCart(state, action: PayloadAction<IAddCart>) {
            state.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state))
        },


        deleteItemFromCart(state, action: PayloadAction<string>) {
            const newState = state.filter((elem: IElem) => elem.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(newState))
            return newState
        },


        incrementQuantityItems(state, action: PayloadAction<string>) {
            const ch = state.find((elem: IElem) => elem.id == action.payload)
            if (ch) {
                ch.count += 1
                localStorage.setItem('cart', JSON.stringify(state))
            }
            
        },


        decrementQuantityItems(state, action: PayloadAction<string>) {
            const ch = state.find((elem: IElem) => elem.id == action.payload)
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
            const ch = state.find((elem: IElem) => elem.id == action.payload.id)
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