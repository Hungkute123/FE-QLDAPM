import { combineReducers } from '@reduxjs/toolkit';
import categorySlice from '../slice/appSlice/categorySlice';
import discountSlice from '../slice/appSlice/discountSlice';
import homeSlice from '../slice/appSlice/homeSlice';
import modalSlice from '../slice/appSlice/modalSlice';
import productSlice from '../slice/appSlice/productSlice';
import userSlice from '../slice/appSlice/userSlice';
import statisticSlice from '../slice/appSlice/statisticSlice';
import cartSlice from "../slice/appSlice/cartSlice";

export const rootReducer = combineReducers({
  modalSlice,
  homeSlice,
  categorySlice,
  productSlice,
  userSlice,
  discountSlice,
  statisticSlice,
  cartSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
