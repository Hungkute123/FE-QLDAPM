import axiosMy from './axiosMy';

const orderApi = {
  getOrder: async (params: any) => {
    const url = `order/get-order`;
    const { data } = await axiosMy.get(url, { params });
    return data;
  },
  addNewOrder: async (body: any) => {
    const url = 'order/add-new-order';
    return await axiosMy.post(url, body );
  },
  getOrderByIDUser: async (params: any) => {
    const url = 'order/order-by-iduser';
    return await axiosMy.get(url, { params });
  },
  getOrderOfSeller: async (params: any) => {
    const url = 'order/order-of-seller';
    return await axiosMy.get(url, { params });
  },
  updateStatus: async (body: any) => {
    const url = 'order/update-status';
    return await axiosMy.patch(url, body );
  },
};
export default orderApi;
