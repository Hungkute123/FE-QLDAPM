import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import statisticApi from '../../../services/aixos/statisticApi';

export const doGetListStatisticByYear = createAsyncThunk(
  'favorite/addItemToFavorite',
  async (params: IParamsStatisticByYear) => {
    return await statisticApi.getStatisticByYear(params).then((res) => res.data);
  },
);

interface IInitialState {
  isLoading: boolean;
  err: string;
  listStatistic: Array<IStatistic>;
}
const initialState = {
  isLoading: false,
  err: '',
  listStatistic: [],
} as IInitialState;

export const statisticSlice = createSlice({
  name: 'statistic',
  initialState: initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetListStatisticByYear.pending, (state, action) => {
      state.listStatistic = [];
      state.isLoading = true;
    });
    builder.addCase(doGetListStatisticByYear.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload) state.listStatistic = action.payload.data;
    });
  },
});

const { reducer } = statisticSlice;
export default reducer;
