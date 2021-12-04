import { combineReducers } from '@reduxjs/toolkit';
import categorySlice from '../slice/appSlice/categorySlice';
import discountSlice from '../slice/appSlice/discountSlice';
import homeSlice from '../slice/appSlice/homeSlice';
import modalSlice from '../slice/appSlice/modalSlice';
import productSlice from '../slice/appSlice/productSlice';
import userSlice from "../slice/appSlice/userSlice";

export const rootReducer = combineReducers({
  modalSlice,
  homeSlice,
  categorySlice,
  productSlice,
  userSlice,
  discountSlice
});

export type RootState = ReturnType<typeof rootReducer>;
