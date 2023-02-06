import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../redux/store/store'


interface IAmount {
    cartItemId: string,
    amount: number
}


const initialState = (): ShoppingCartItem[] => {
    let item = localStorage.getItem('cart')
    if (item) {
        return JSON.parse(localStorage.cart)
    } else {
        return []
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {

        addCartItem: {
            reducer(state, action: PayloadAction<ShoppingCartItem>) {
                state.push(action.payload)
                localStorage.setItem('cart', JSON.stringify(state))
            },
            prepare(title, price) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        price,
                        count: 1
                    }
                }
            }
        },


        deleteCartItem(state, action: PayloadAction<string>) {
            const newState = state.filter((elem: ShoppingCartItem) => elem.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(newState))
            return newState
        },


        incrementCartItem(state, action: PayloadAction<string>) {
            const cartItem = state.find((elem: ShoppingCartItem) => elem.id === action.payload)
            if (cartItem) {
                cartItem.count += 1
                localStorage.setItem('cart', JSON.stringify(state))
            }
            
        },


        decrementCartItem(state, action: PayloadAction<string>) {
            const cartItem = state.find((elem: ShoppingCartItem) => elem.id === action.payload)
            if (cartItem) {
                if (cartItem.count === 1) {
                    cartItem.count = 1
                } else {
                    cartItem.count -= 1
                }
                localStorage.setItem('cart', JSON.stringify(state))

            }
        },


        changeQuantityCartItem(state, action: PayloadAction<IAmount>) {
            const ch = state.find((elem: ShoppingCartItem) => elem.id == action.payload.cartItemId)
            if (ch) {
                ch.count = action.payload.amount

            }
        }
    },

})

export const { addCartItem,
    deleteCartItem,
    incrementCartItem,
    decrementCartItem,
    changeQuantityCartItem,
   
} = cartSlice.actions

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer