import { createSlice } from '@reduxjs/toolkit'

export const UsersSlice = createSlice({
  name: 'users',
  initialState: {
    UsersArray: [],
  },
  reducers: {
    actionSuccess: (state, action) => {
      state.UsersArray = action.payload.Users;
    },
    actionFailure: (state) => {}
  },
})

// Action creators are generated for each case reducer function
export const { actionSuccess } = UsersSlice.actions

export default UsersSlice.reducer