import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productApi from '../../../services/aixos/productApi';

export const getProductTrend = createAsyncThunk('home/getProductTrend', async (params: any) => {
  return await productApi.getProductTrend(params).then((res) => res.data);
});
export const getTextbook = createAsyncThunk('home/getTextbook', async (params: any) => {
  return await productApi.getProductByIDCategoryWithLimit(params).then((res) => res.data);
});
export const getMask = createAsyncThunk('home/getMask', async (params: any) => {
  return await productApi.getProductByIDCategoryWithLimit(params).then((res) => res.data);
});
export const getHandWash = createAsyncThunk('home/getHandWash', async (params: any) => {
  return await productApi.getProductByIDCategoryWithLimit(params).then((res) => res.data);
});
export const getTopToy = createAsyncThunk('home/getTopToy', async (params: any) => {
  return await productApi.getProductByIDCategoryWithLimit(params).then((res) => res.data);
});
export const getRubik = createAsyncThunk('home/getRubik', async (params: any) => {
  return await productApi.getProductByIDCategoryWithLimit(params).then((res) => res.data);
});
export const getPaintingBook = createAsyncThunk('home/getPaintingBook', async (params: any) => {
  return await productApi.getProductByIDCategoryWithLimit(params).then((res) => res.data);
});
export const getChildrenReadingStories = createAsyncThunk(
  'home/getChildrenReadingStories',
  async (params: any) => {
    return await productApi.getProductByIDCategoryWithLimit(params).then((res) => res.data);
  },
);
export const getCalculator = createAsyncThunk('home/getCalculator', async (params: any) => {
  return await productApi.getProductByIDCategoryWithLimit(params).then((res) => res.data);
});
export const getShockingPriceToy = createAsyncThunk('home/getShockingPriceToy', async (params: any) => {
    return await productApi.getProductByIDCategoryWithLimit(params).then((res) => res.data);
  });
interface IInitialState {
  trend: any;
  hot: any;
  bestseller: any;
  textbook: any;
  mask: any;
  handwash: any;
  toptoy: any;
  rubik: any;
  paintingbook: any;
  paintingtool: any;
  childrenreadingstories: any;
  calculator: any;
  shockingpricetoy: any;
  status: string;
}
const initialState = {
  trend: [],
  hot: [],
  bestseller: [],
  textbook: [],
  mask: [],
  handwash: [],
  toptoy: [],
  rubik: [],
  paintingbook: [],
  paintingtool: [],
  childrenreadingstories: [],
  calculator: [],
  shockingpricetoy: [],
  featuredtoys: [],
  bestsellingtoys: [],
  mangabook: [],
  nonfiction: [],
  education: [],
  status: '',
} as IInitialState;

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,

  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getProductTrend.pending, (state, action) => {
    //   state.status = 'loading';
    // });
    builder.addCase(getProductTrend.fulfilled, (state, action) => {
      state.status = 'success';
      state.trend = action.payload;
    });
    // builder.addCase(getProductTrend.rejected, (state, action) => {
    //   state.status = 'failed';
    // });
    builder.addCase(getTextbook.fulfilled, (state, action) => {
      state.status = 'success';
      state.textbook = action.payload;
    });
    builder.addCase(getMask.fulfilled, (state, action) => {
      state.status = 'success';
      state.mask = action.payload;
    });
    builder.addCase(getHandWash.fulfilled, (state, action) => {
      state.status = 'success';
      state.handwash = action.payload;
    });
    builder.addCase(getTopToy.fulfilled, (state, action) => {
      state.status = 'success';
      state.toptoy = action.payload;
    });
    builder.addCase(getRubik.fulfilled, (state, action) => {
      state.status = 'success';
      state.rubik = action.payload;
    });
    builder.addCase(getPaintingBook.fulfilled, (state, action) => {
      state.status = 'success';
      state.paintingbook = action.payload;
    });
    builder.addCase(getChildrenReadingStories.fulfilled, (state, action) => {
      state.status = 'success';
      state.childrenreadingstories = action.payload;
    });
    builder.addCase(getCalculator.fulfilled, (state, action) => {
      state.status = 'success';
      state.calculator = action.payload;
    });
    builder.addCase(getShockingPriceToy.fulfilled, (state, action) => {
        state.status = 'success';
        state.shockingpricetoy = action.payload;
      });
  },
});

const { reducer, actions } = homeSlice;
export const {} = actions;
export default reducer;
