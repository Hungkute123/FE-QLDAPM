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

export const updateInfo = createAsyncThunk('user/update-info', async (params: any) => {
  return await userApi.updateInfo(params).then((res) => res.data);
});

export const addInformationVAT = createAsyncThunk(
  'user/add-information-vat',
  async (params: any) => {
    return await userApi.addInformationVAT(params).then((res) => res.data);
  },
);

export const getInformationVAT = createAsyncThunk(
  'user/get-information-vat',
  async (params: any) => {
    return await userApi.getInformationVAT(params).then((res) => res.data);
  },
);

export const addUserAddress = createAsyncThunk('user/add-user-address', async (params: any) => {
  return await userApi.addUserAddress(params).then((res) => res.data);
});

export const updateUserAddress = createAsyncThunk(
  'user/update-user-address',
  async (params: any) => {
    return await userApi.getInfo(params).then((res) => res.data);
  },
);

interface IInitialState {
  isUser: boolean;
  OTP: string;
  isAccount: boolean;
  account: IAccount;
  status: boolean;
  message: string;
  informationVAT: IInformationVAT;
}
const initialState = {
  isUser: false,
  OTP: '',
  isAccount: false,
  account: {},
  status: false,
  message: '',
  informationVAT: {},
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
    builder.addCase(updateInfo.fulfilled, (state, action) => {
      state.status = action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(addInformationVAT.fulfilled, (state, action) => {
      state.status = action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(getInformationVAT.fulfilled, (state, action) => {
      state.informationVAT = action.payload.data;
    });
    builder.addCase(addUserAddress.fulfilled, (state, action) => {
      state.status = action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(updateUserAddress.fulfilled, (state, action) => {
      state.status = action.payload.data;
      state.message = action.payload.message;
    });
  },
});

const { reducer, actions } = userSlice;
export const {} = actions;
export default reducer;
