import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import orderApi from '../../../services/aixos/orderApi';
import { Elimit } from '../../../constants';

export const doAddNewOrder = createAsyncThunk('order/addNewOrder', async (body: any) => {
  return await orderApi.addNewOrder(body).then((res) => res.data);
});



type IInitialState = {
  isLoading: boolean;
};

const initialState = {
  isLoading: false,
} as IInitialState;

export const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    //doAddNewPOrder
    builder.addCase(doAddNewOrder.fulfilled, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doAddNewOrder.rejected, (state, action) => {
      state.isLoading = false;
    });
    
  },
});

const { actions, reducer } = orderSlice;
export const {} = actions;
export default reducer;
