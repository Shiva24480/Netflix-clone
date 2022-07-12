import { configureStore } from '@reduxjs/toolkit';
import mylistReducer from '../features/mylistSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    list: mylistReducer
  },
});
