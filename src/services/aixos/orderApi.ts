import axiosMy from './axiosMy';

const orderApi = {
  getOrder: async (params: any) => {
    const url = `order/get-order`;
    const { data } = await axiosMy.get(url, { params });
    return data;
  },
  getOrderByIDOrder: async (params: any) => {
    const url = `order/get-order-id`;
    const { data } = await axiosMy.get(url, { params });
    return data;
  },
  addNewOrder: async (body: any) => {
    const url = 'order/add-new-order';
    return await axiosMy.post(url, body);
  },
};
export default orderApi;
