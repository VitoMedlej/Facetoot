import { createSlice } from '@reduxjs/toolkit'

export const RegisterSlice = createSlice({
  name: 'pages',
  initialState: {
    currentPage: 'login',
  },
  reducers: {
    Login : (state) => {
      state.currentPage = 'login'
    },
    SignIn : (state) => {
      state.currentPage = 'signIn'
    }
  },
})

// Action creators are generated for each case reducer function
export const { Login, SignIn } = RegisterSlice.actions

export default RegisterSlice.reducer