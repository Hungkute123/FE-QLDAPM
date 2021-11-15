import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import categoryApi from '../../../services/aixos/categoryApi';

export const getCategoryProductByLevelZero = createAsyncThunk(
  'category/getCategoryProductByZero',
  async (params: any) => {
    return await categoryApi.getCategoryProductByLevel(params).then((res) => res.data);
  },
);
export const getCategoryProductByIDParentLevelOne = createAsyncThunk(
  'category/getCategoryProductByIDParentLevelOne',
  async (params: any) => {
    return await categoryApi.getCategoryProductByIDParent(params).then((res) => res.data);
  },
);
export const getCategoryProductByIDParentLevelTwo = createAsyncThunk(
  'category/getCategoryProductByIDParentLevelTwo',
  async (params: any) => {
    return await categoryApi.getCategoryProductByIDParent(params).then((res) => res.data);
  },
);
interface IInitialState {
  categoryLevelZero: any;
  categoryLevelOne: any;
  categoryLevelTwo: any;
  status: string;
}
const initialState = {
  categoryLevelZero: [],
  categoryLevelOne: [],
  categoryLevelTwo: [],
  status: '',
} as IInitialState;

export const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,

  reducers: {
    resetCategoryLevelTwo(state) {
      state.categoryLevelTwo= [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryProductByLevelZero.fulfilled, (state, action) => {
      state.status = 'success';
      state.categoryLevelZero = action.payload;
    });
    builder.addCase(getCategoryProductByIDParentLevelOne.pending, (state, action) => {
      state.status = 'load';
      state.categoryLevelOne = [];
    });
    builder.addCase(getCategoryProductByIDParentLevelOne.fulfilled, (state, action) => {
      state.status = 'success';
      state.categoryLevelOne = action.payload;
    });
    builder.addCase(getCategoryProductByIDParentLevelOne.rejected, (state, action) => {
      state.status = 'rejected';
      state.categoryLevelOne = [];
    });
    builder.addCase(getCategoryProductByIDParentLevelTwo.pending, (state, action) => {
      state.status = 'success';
      state.categoryLevelTwo = [];
    });
    builder.addCase(getCategoryProductByIDParentLevelTwo.fulfilled, (state, action) => {
      state.status = 'success';
      state.categoryLevelTwo.push(action.payload);
    });
  },
});

const { reducer, actions } = categorySlice;
export const {resetCategoryLevelTwo} = actions;
export default reducer;
