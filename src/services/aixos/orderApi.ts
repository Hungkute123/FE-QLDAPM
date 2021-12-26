import axiosMy from './axiosMy';

const orderApi = {
  getOrder: async (params: any) => {
    const url = `order/get-order`;
    const { data } = await axiosMy.get(url, { params });
    return data;
  },
};

export default orderApi;
