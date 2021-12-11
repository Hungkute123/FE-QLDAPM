import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../../services/aixos/userApi';

export const loginWithEmail = createAsyncThunk('user/login', async (params: any) => {
  return await userApi.loginWithEmail(params).then((res) => res.data);
});

export const registerWithEmail = createAsyncThunk('user/register', async (params: any) => {
  return await userApi.registerWithEmail(params).then((res) => res.data);
});

export const sendOTP = createAsyncThunk('user/send-otp', async (params: any) => {
  return await userApi.sendOTP(params).then((res) => res.data);
});

export const getInfo = createAsyncThunk('user/get-info', async (params: any) => {
  return await userApi.getInfo(params).then((res) => res.data);
});
interface IInitialState {
  isUser: boolean,
  OTP: string,
  isAccount: boolean,
  account: IAccount,
}
const initialState = {
  isUser: false,
  OTP: '',
  isAccount: false,
  account: {},
} as IInitialState;
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginWithEmail.fulfilled, (state, action) => {
      localStorage.setItem('jwt', action.payload.data);
    });
    builder.addCase(registerWithEmail.fulfilled, (state, action) => {
      state.isUser = false;
      state.OTP = '';
    });
    builder.addCase(sendOTP.fulfilled, (state, action) => {
      state.OTP = action.payload.data;
      state.isUser = action.payload.isUser;
    });
    builder.addCase(getInfo.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.account = action.payload.data;
        state.isAccount = true;
      } else {
        state.isAccount = false;
      }
    });
  },
});

const { reducer, actions } = userSlice;
export const {} = actions;
export default reducer;
