import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createStore } from 'redux'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import  rootReducer  from '../rootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export {store, persistor};
