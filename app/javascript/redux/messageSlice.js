import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMessage = createAsyncThunk('message/fetchMessage', async () => {
  const res = await axios.get('http://127.0.0.1:3000/api/message');
  return res.data
} )

export const messageSlice = createSlice({
  name: 'msg',
  initialState: {
    isLoading: false,
    message: {},
    error: '',
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMessage.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMessage.rejected, (state, action) => {
        state.error = 'Can not retrive data'
        state.isLoading = false;
      })
  }
});

export default messageSlice.reducer;
