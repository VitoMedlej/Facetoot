import {configureStore} from '@reduxjs/toolkit'
import RegisterSlice from './RegisterSlice'
import UserInfoSlice from './UserInfoSlice'
import UsersSlice from './UsersSlice'
const store = configureStore({
    reducer: {
        page: RegisterSlice, 
        userInfo : UserInfoSlice,
        Allusers : UsersSlice
    }
})
export default store