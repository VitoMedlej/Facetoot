import {createSlice} from '@reduxjs/toolkit'

export const UserInfoSlice = createSlice({
    name: 'userInfo',
    initialState: {
        currentUserInfo: {
            displayName: '',
            photoURL: 'https://res.cloudinary.com/dweqbyja4/image/upload/v1634239098/defaultuser_ygf4d8' +
                    '.png',
            email: '',
            uid: ''
        }
    },
    reducers: {
        updateUser: (state, action) => {
            state.currentUserInfo.displayName = `${action.payload.User.displayName || 'Default User'}`

            state.currentUserInfo.photoURL = `${action.payload.User.photoURL || 'https://res.cloudinary.com/dweqbyja4/image/upload/v1634239098/defaultuser_ygf4d8' +
                '.png'}`

            state.currentUserInfo.uid = `${action.payload.User.uid || ''}`

            state.currentUserInfo.email = `${action.payload.User.email || ''}`

        }
    }
})

export const {
    updateUser
} = UserInfoSlice.actions
export default UserInfoSlice.reducer