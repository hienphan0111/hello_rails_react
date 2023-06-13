import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageSlice';
export default configureStore({
  reducer: {
    msg: messageReducer,
  }
});
