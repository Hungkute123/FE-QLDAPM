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
  updateInfo: async (requestOption: any) =>{
    const url = 'user/update-info';
    return await axiosMy.patch(url, requestOption );
  },
  addInformationVAT: async (requestOption: any) =>{
    const url = 'user/add-information-vat';
    return await axiosMy.post(url, requestOption );
  },
  getInformationVAT: async (params: any) => {
    const url = `user/get-information-vat`;
    return await axiosMy.get(url, { params });
  },
  addUserAddress: async (requestOption: any) =>{
    const url = 'user/add-user-address';
    return await axiosMy.post(url, requestOption );
  },
  updateUserAddress: async (requestOption: any) =>{
    const url = 'user/update-user-address';
    return await axiosMy.patch(url, requestOption );
  },
  getAllUserAddress: async (params: any) => {
    const url = `user/get-all-address`;
    return await axiosMy.get(url, { params });
  },
  getUserAddress: async (params: any) => {
    const url = `user/get-address`;
    return await axiosMy.get(url, { params });
  },
  deleteUserAddress: async (params: any) => {
    const url = `user/delete-user-address`;
    return await axiosMy.delete(url, { params });
  },
  getAllUser: async () => {
    const url = `user/get-all-user`;
    return await axiosMy.get(url);
  },
  activeUser: async (params: any) => {
    const url = `user/active-user`;
    return await axiosMy.get(url, { params });
  },

  changeRoleUser: async (params: any) => {
    const url = `user/update-role`;
    return await axiosMy.patch(url, params);
  },
};

export default userApi;
