import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http  from '../../utils/http';

const initialState = {
  picture: [],
  status: '',
};

export const fetchPicture = createAsyncThunk(
  'picture/fetchPicture',
  async (page, _id) => {
    const response = await http.get(`images/search?limit=10&page=${page}&category_ids=${_id | 1}`);
    if(response.status === 200) {
      return response.data;
    }
  }
);


export const pictureSlice = createSlice({
  name: 'picture',
  initialState,
   extraReducers: {
     [fetchPicture.pending]: (state) => {
      return { ...state, status: "Pending" };
    },
     [fetchPicture.fulfilled]: (state, { payload }) => {
      return { ...state, status: "", picture: payload };
    },
    [fetchPicture.rejected]: (state, { payload }) => {
      return { ...state, status: `Rejected! ${payload}` };
    },
   }
});

export const getAllPicture = (state) => state.picture?.picture;

export default pictureSlice.reducer;
