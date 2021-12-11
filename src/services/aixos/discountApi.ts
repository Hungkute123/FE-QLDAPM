import axiosMy from './axiosMy';
const discountApi = {
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
  getDiscountByIDDiscount: async (params: any) => {
    const url = 'discount/iddiscount';
    return await axiosMy.get(url, { params });
  },
  patchDiscount: async (body: any) => {
    const url = 'discount/patch-discount';
    return await axiosMy.patch(url, body);
  },
};
export default discountApi;
