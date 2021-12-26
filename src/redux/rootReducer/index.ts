import { combineReducers } from '@reduxjs/toolkit';
import categorySlice from '../slice/appSlice/categorySlice';
import discountSlice from '../slice/appSlice/discountSlice';
import homeSlice from '../slice/appSlice/homeSlice';
import modalSlice from '../slice/appSlice/modalSlice';
import productSlice from '../slice/appSlice/productSlice';
import userSlice from '../slice/appSlice/userSlice';
import statisticSlice from '../slice/appSlice/statisticSlice';
import cartSlice from "../slice/appSlice/cartSlice";
import orderSlice from "../slice/appSlice/orderSlice";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key:'root',
  storage,
  whitelist: ['cartSlice']
}
const rootReducer = combineReducers({
  modalSlice,
  homeSlice,
  categorySlice,
  productSlice,
  userSlice,
  discountSlice,
  statisticSlice,
  cartSlice,
  orderSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);