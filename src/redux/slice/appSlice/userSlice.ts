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
    return await userApi.updateUserAddress(params).then((res) => res.data);
  },
);

export const getAllUserAddress = createAsyncThunk('user/get-all-address', async (params: any) => {
  return await userApi.getAllUserAddress(params).then((res) => res.data);
});

export const getUserAddress = createAsyncThunk('user/get-address', async (params: any) => {
  return await userApi.getUserAddress(params).then((res) => res.data);
});

export const deleteUserAddress = createAsyncThunk(
  'user/delete-user-address',
  async (params: any) => {
    return await userApi.deleteUserAddress(params).then((res) => res.data);
  },
);
export const doGetUserAddress = createAsyncThunk(
  'user/get-all-address',
  async(params: any) => {
  return await userApi.getUserAddress(params).then((res) => res.data);
});

export const doGetAllUser = createAsyncThunk('user/get-all-user', async () => {
  return await userApi.getAllUser().then((res) => res.data);
});

export const doChangeActiveUser = createAsyncThunk('user/active-user', async (params: any) => {
  return await userApi.activeUser(params).then((res) => res.data);
});

export const doChangeRoleUser = createAsyncThunk('user/role-user', async (params: any) => {
  return await userApi.changeRoleUser(params).then((res) => res.data);
});

interface IInitialState {
  isUser: boolean;
  OTP: string;
  isAccount: boolean;
  account: IAccount;
  status: boolean;
  message: string;
  informationVAT: IInformationVAT;
  listUser: any;
  deliveryAddress: Array<IUserAddress>;
  paymentAddress: Array<IUserAddress>;
  ortherAddress: Array<IUserAddress>;
  itemAddress: IUserAddress;
}

const initialState = {
  isUser: false,
  OTP: '',
  isAccount: false,
  account: {},
  status: false,
  message: '',
  informationVAT: {},
  listUser: [],
  deliveryAddress: [],
  paymentAddress: [],
  ortherAddress: [],
  itemAddress: {},
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
    builder.addCase(getAllUserAddress.fulfilled, (state, action) => {
      if (action.payload.data) {
        const address: Array<IUserAddress> = action.payload.data;
        state.paymentAddress = [];
        state.deliveryAddress = [];
        state.ortherAddress = [];

        address.map((item) => {
          if (!!item.PaymentAddress) {
            state.paymentAddress.push(item);
          } else if (!!item.DeliveryAddress) {
            state.deliveryAddress.push(item);
          } else {
            state.ortherAddress.push(item);
          }
        });
      }
    });
    builder.addCase(getUserAddress.fulfilled, (state, action) => {
      state.itemAddress = action.payload.data;
    });
    builder.addCase(deleteUserAddress.fulfilled, (state, action) => {
      state.status = action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(getInfo.rejected, (state, action) => {
      state.isAccount = false;
    });
    builder.addCase(doGetAllUser.fulfilled, (state, action) => {
      state.listUser = action.payload.data;
    });
    builder.addCase(doChangeActiveUser.fulfilled, (state, action) => {
      const userid = action.payload.data;

      if (userid) {
        const index = state.listUser.findIndex((item: any) => item.userid === parseInt(userid));

        if (index >= 0) {
          state.listUser[index].active = !state.listUser[index].active;
        }
      }
    });

    builder.addCase(doChangeRoleUser.fulfilled, (state, action) => {
      const { role, userid } = action.payload.data;

      if (userid) {
        const index = state.listUser.findIndex((item: any) => item.userid === parseInt(userid));

        if (index >= 0) {
          state.listUser[index].typeofuser = role;
        }
      }
    });
  },
});

const { reducer, actions } = userSlice;
export const {} = actions;
export default reducer;
