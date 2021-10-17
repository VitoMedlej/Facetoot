import {configureStore} from '@reduxjs/toolkit'
import RegisterSlice from './RegisterSlice'
import CurrentUserSlice from './CurrentUserSlice'
import UserInfoSlice from './UserInfoSlice'

const store = configureStore({
    reducer: {
        page: RegisterSlice,
        user : CurrentUserSlice,
        userInfo : UserInfoSlice
    }
})
export default store