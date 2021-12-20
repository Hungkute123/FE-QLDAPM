import axiosMy from './axiosMy';
const orderApi = {
  addNewOrder: async (body: any) =>{
    const url = 'order/add-new-order';
    return await axiosMy.post(url, body );
  }
};
export default orderApi;
