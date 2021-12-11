import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import discountApi from '../../../services/aixos/discountApi';

export const doGetDiscountByIDUser = createAsyncThunk(
  'discount/getDiscountByIDUser',
  async (params: any) => {
    return await discountApi.getDiscountByIDUser(params).then((res) => res.data);
  },
);
export const dogetDiscountByIDProduct = createAsyncThunk(
  'discount/getDiscountByIDProduct',
  async (params: any) => {
    return await discountApi.getDiscountByIDProduct(params).then((res) => res.data);
  },
);
export const doaddNewDiscount = createAsyncThunk('discount/addNewDiscount', async (body: any) => {
  return await discountApi.addNewDiscount(body).then((res) => res.data);
});
export const doGetDiscountByIDDiscount = createAsyncThunk(
  'discount/getDiscountByIDDiscount',
  async (params: any) => {
    return await discountApi.getDiscountByIDDiscount(params).then((res) => res.data);
  },
);
export const doPatchDiscount = createAsyncThunk('discount/patchDiscount', async (body: any) => {
  return await discountApi.patchDiscount(body).then((res) => res.data);
});
interface IInitialState {
  isLoading: boolean;
}
const initialState = {
  isLoading: false,
} as IInitialState;

export const discountSlice = createSlice({
  name: 'discount',
  initialState: initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDiscountByIDUser.fulfilled, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doGetDiscountByIDUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(dogetDiscountByIDProduct.fulfilled, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(dogetDiscountByIDProduct.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(doaddNewDiscount.fulfilled, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doaddNewDiscount.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(doGetDiscountByIDDiscount.fulfilled, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doGetDiscountByIDDiscount.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(doPatchDiscount.fulfilled, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doPatchDiscount.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

const { reducer, actions } = discountSlice;
export const {} = actions;
export default reducer;
