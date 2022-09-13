import { createSlice } from '@reduxjs/toolkit'

const getInitialState = () => {
    let item = localStorage.getItem('userData')
    if (item) {
        return JSON.parse(localStorage.userData)
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

export default userSlice.reducer