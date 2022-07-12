import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:"guest",
  },
  reducers: {
    logout: (state) => {
      state.user = "guest";
    },
    login: (state, action) => {
      state.user = action.payload;
    },
  },
})

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;