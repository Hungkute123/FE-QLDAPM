import axiosMy from './axiosMy';
const categoryApi = {
  getDiscountByIDUser: async (params: any) => {
    const url = 'discount/iduser';
    return await axiosMy.get(url, { params });
  },
  getDiscountByIDProduct: async (params: any) => {
    const url = 'discount/idproduct';
    return await axiosMy.get(url, { params });
  },
  addNewDiscount: async (body: any) => {
    const url = 'discount/add-new-discount';
    return await axiosMy.post(url, body);
  },
};
export default categoryApi;
