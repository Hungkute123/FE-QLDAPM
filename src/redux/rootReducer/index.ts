import { combineReducers } from '@reduxjs/toolkit';
import categorySlice from '../slice/appSlice/categorySlice';
import homeSlice from '../slice/appSlice/homeSlice';
import modalSlice from '../slice/appSlice/modalSlice';
import productSlice from '../slice/appSlice/productSlice';

export const rootReducer = combineReducers({
  modalSlice,
  homeSlice,
  categorySlice,
  productSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
