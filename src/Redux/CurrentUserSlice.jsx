import {createSlice} from '@reduxjs/toolkit'

export const CurrentUserSlice = createSlice({
    name: 'userReady',
    initialState: {
        currentUser: false
    },
    reducers: {
        userReady: (state) => {
            state.currentUser = true
        }

    }
})

export const {
    userReady
} = CurrentUserSlice.actions
export default CurrentUserSlice.reducer