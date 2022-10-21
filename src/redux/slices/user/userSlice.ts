import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

type Data = {
    name: string,
    value: string,
    description: string
}

type PData = {
    id: number,
    name: string,
    data: Data[]
}



const getInitialState = (): PData[] => {
    let item = localStorage.getItem('userData')
    
    if (item) {
        return JSON.parse(item)
    } else {
        return []
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState:
        getInitialState(),

    reducers: {
        dataUser(state, action) {
            const newState = action.payload
            
            localStorage.setItem('userData', JSON.stringify(newState))
            return newState 
        },
        changeUserData(state, action) {
            return action.payload
        }
        



    },



})

export const { dataUser, changeUserData } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer