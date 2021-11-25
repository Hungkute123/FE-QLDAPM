import axiosMy from './axiosMy';

const userApi = {
  loginWithEmail: async (params: any) => {
    const url = `user/login`;
    return await axiosMy.get(url, { params });
  },
  registerWithEmail: async (params: any) => {
    const url = `user/register`;
    return await axiosMy.get(url, { params });
  },
  sendOTP: async (params: any) => {
    const url = `user/send-otp`;
    return await axiosMy.get(url, { params });
  },
  getInfo: async (params: any) => {
    const url = `user/get-info`;
    return await axiosMy.get(url, { params });
  },
};

export default userApi;
