import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import favoriteApi from '../../../services/aixos/favoriteApi';

export const addItemToFavorite = createAsyncThunk(
  'favorite/addItemToFavorite',
  async (params: IParamsAddFavorite) => {
    return await favoriteApi.addItemToFavorite(params).then((res) => res.data);
  },
);

interface IInitialState {
  isLoading: boolean;
  err: string;
}
const initialState = {
  isLoading: false,
  err: '',
} as IInitialState;

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialState,

  reducers: {},
  extraReducers: (builder) => {},
});

const { reducer } = favoriteSlice;
export default reducer;
