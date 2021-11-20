import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import productApi from '../../../services/aixos/productApi';
import { Elimit } from '../../../constants';

export const doGetSearchListProduct = createAsyncThunk(
  'product/getSearchList',
  async (params: IParamsSearchProduct) => {
    return await productApi.searchProduct(params).then((res) => res.data);
  },
);

export const doGetCountSearchListProduct = createAsyncThunk(
  'product/getCountSearchList',
  async (params: IParamsSearchProduct) => {
    return await productApi.countSearchProduct(params).then((res) => res.data);
  },
);

export const doGetFavoriteList = createAsyncThunk('product/doGetFavoriteList', async () => {
  return await productApi.favoriteList().then((res) => res.data);
});

type IInitialState = {
  listSearchProduct: Array<IProduct>;
  favoriteList: Array<IProduct>;
  isLoading: boolean;
  error: string;
  pathSrc: string;
  numbersProduct: number;
};

const initialState = {
  listSearchProduct: [],
  favoriteList: [],
  isLoading: false,
  error: '',
  pathSrc: '',
  numbersProduct: Elimit.productSearchLimit,
} as IInitialState;

export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get search list
    builder.addCase(doGetSearchListProduct.pending, (state, action) => {
      state.listSearchProduct = [];
      state.isLoading = true;
    });
    builder.addCase(
      doGetSearchListProduct.fulfilled,
      (state, action: PayloadAction<IResponseSearchProduct>) => {
        state.isLoading = false;
        state.listSearchProduct = action.payload.data;
        state.pathSrc = action.payload.Path;
      },
    );
    builder.addCase(doGetSearchListProduct.rejected, (state, action) => {
      state.isLoading = false;
    });

    //doGetCountSearchListProduct
    builder.addCase(doGetCountSearchListProduct.pending, (state, action) => {
      state.numbersProduct = 0;
      state.isLoading = true;
    });
    builder.addCase(
      doGetCountSearchListProduct.fulfilled,
      (state, action: PayloadAction<IResponseCountSearchProduct>) => {
        state.isLoading = false;
        state.numbersProduct = action.payload.data;
      },
    );
    builder.addCase(doGetCountSearchListProduct.rejected, (state, action) => {
      state.isLoading = false;
    });

    //doGetFavoriteList
    builder.addCase(doGetFavoriteList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      doGetFavoriteList.fulfilled,
      (state, action: PayloadAction<IResponseSearchProduct>) => {
        state.isLoading = false;
        state.favoriteList = action.payload.data;
        state.pathSrc = action.payload.Path;
      },
    );
    builder.addCase(doGetFavoriteList.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

const { actions, reducer } = productSlice;
export default reducer;
