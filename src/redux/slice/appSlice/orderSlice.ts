import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import orderApi from '../../../services/aixos/orderApi';
import { Elimit } from '../../../constants';

export const doAddNewOrder = createAsyncThunk('order/addNewOrder', async (body: any) => {
  return await orderApi.addNewOrder(body).then((res) => res.data);
});
export const doGetOrderByIDUser = createAsyncThunk(
  'order/doGetOrderByIDUser',
  async (params: any) => {
    return await orderApi.getOrderByIDUser(params).then((res) => res.data);
  },
);
export const doGetOrderOfSeller = createAsyncThunk(
  'order/doGetOrderOfSeller',
  async (params: any) => {
    return await orderApi.getOrderOfSeller(params).then((res) => res.data);
  },
);
export const doUpdateStatus = createAsyncThunk(
  'order/doUpdateStatus',
  async (params: any) => {
    return await orderApi.updateStatus(params).then((res) => res.data);
  },
);

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
    //doGetOrderByIDUser
    builder.addCase(doGetOrderByIDUser.fulfilled, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doGetOrderByIDUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    //doGetOrderOfSeller
    builder.addCase(doGetOrderOfSeller.fulfilled, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doGetOrderOfSeller.rejected, (state, action) => {
      state.isLoading = false;
    });
    //doUpdateStatus
    builder.addCase(doUpdateStatus.fulfilled, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doUpdateStatus.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

const { actions, reducer } = orderSlice;
export const {} = actions;
export default reducer;
