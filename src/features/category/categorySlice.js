import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http  from '../../utils/http';

const initialState = {
  category: [],
  status: '',
};

export const fetchCategory = createAsyncThunk(
  'category/fetchCategory',
  async () => {
    const response = await http.get(`categories`);
    if(response.status === 200) {
      return response.data;
    }
  }
);

export const categorySlice = createSlice({
  name: 'category',
  initialState,
   extraReducers: {
     [fetchCategory.pending]: (state) => {
      return { ...state, status: "Pending" };
    },
     [fetchCategory.fulfilled]: (state, { payload }) => {
      return { ...state, status: "", category: payload };
    },
    [fetchCategory.rejected]: (state, { payload }) => {
      return { ...state, status: `Rejected! ${payload}` };
    },
   }
});

export const getAllCategory = (state) => state.category?.category;

export default categorySlice.reducer;
