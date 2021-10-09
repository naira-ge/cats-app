import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../features/category/categorySlice';
import pictureSlice from '../features/picture/pictureSlice';

export const store = configureStore({
  reducer: {
    category: categorySlice,
    picture: pictureSlice,
  },
});
