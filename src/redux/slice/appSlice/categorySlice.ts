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
export const getDetailCategoryByID = createAsyncThunk(
  'category/getDetailCategoryByID',
  async (params: any) => {
    return await categoryApi.getDetailCategoryByID(params).then((res) => res.data);
  },
);
export const doGetOneCategory = createAsyncThunk(
  'category/doGetOneCategory',
  async (params: any) => {
    return await categoryApi.getOneCategory(params).then((res) => res.data);
  },
);

export const doUpdateCategory = createAsyncThunk(
  'category/doUpdateCategory',
  async (params: any) => {
    return await categoryApi.updateCategory(params).then((res) => res.data);
  },
);

export const doDeleteCategory = createAsyncThunk(
  'category/doDeleteCategory',
  async (params: any) => {
    return await categoryApi.deleteCategory(params).then((res) => res.data);
  },
);

export const doAddCategory = createAsyncThunk('category/doAddCategory', async (params: any) => {
  return await categoryApi.addCategory(params).then((res) => res.data);
});

export const doGetAllCategory = createAsyncThunk('category/doGetAllCategory', async () => {
  return await categoryApi.getAllCate().then((res) => res.data);
});

export const doGetSearchCategory = createAsyncThunk('category/doGetSearchCategory', async (params: any) => {
  return await categoryApi.searchCate(params).then((res) => res.data);
});
export const doGetCategoryProductByIDParent = createAsyncThunk(
  'category/doGetCategoryProductByIDParent',
  async (params: any) => {
    return await categoryApi.getCategoryProductByIDParent(params).then((res) => res.data);
  },
);
interface IInitialState {
  categoryLevelZero: any;
  categoryLevelOne: any;
  categoryLevelTwo: any;
  oneCategory: any;
  status: string;
  listCategory: any;
}
const initialState = {
  categoryLevelZero: [],
  categoryLevelOne: [],
  categoryLevelTwo: [],
  oneCategory: {},
  status: '',
  listCategory: []
} as IInitialState;

export const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,

  reducers: {
    resetCategoryLevelTwo(state) {
      state.categoryLevelTwo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryProductByLevelZero.pending, (state, action) => {
      state.categoryLevelZero = [];
    });
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

    builder.addCase(getDetailCategoryByID.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(doGetOneCategory.pending, (state, action) => {
      state.oneCategory = {};
    });
    builder.addCase(doGetOneCategory.fulfilled, (state, action) => {
      state.status = 'success';
      state.oneCategory = action.payload.data;
    });

    builder.addCase(doGetAllCategory.pending, (state, action) => {
      state.listCategory = {};
    });
    builder.addCase(doGetAllCategory.fulfilled, (state, action) => {
      state.status = 'success';
      state.listCategory = action.payload;
    });

    builder.addCase(doGetSearchCategory.pending, (state, action) => {
      state.listCategory = {};
    });
    builder.addCase(doGetSearchCategory.fulfilled, (state, action) => {
      state.status = 'success';
      state.listCategory = action.payload;
    });
    builder.addCase(doGetCategoryProductByIDParent.pending, (state, action) => {
      
    });
    builder.addCase(doGetCategoryProductByIDParent.fulfilled, (state, action) => {
      state.status = 'success';
    });
  },
});

const { reducer, actions } = categorySlice;
export const { resetCategoryLevelTwo } = actions;
export default reducer;
