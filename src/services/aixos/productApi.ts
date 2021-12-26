import axiosMy from './axiosMy';
const productApi = {
  getProductByIDCategoryWithLimit: async (params: any) => {
    const url = 'products/idcategory-limit';
    return await axiosMy.get(url, { params });
  },
  getAllProductByIDCategory: async (params: any) => {
    const url = 'products/idcategory';
    return await axiosMy.get(url, { params });
  },
  getProductByIDProduct: async (params: any) => {
    const url = 'products/idproduct';
    return await axiosMy.get(url, { params });
  },
  searchProduct: async (params: IParamsSearchProduct) => {
    const url = 'products/search';
    return await axiosMy.get(url, { params });
  },
  countSearchProduct: async (params: any) => {
    const url = 'products/count-search';
    return await axiosMy.get(url, { params });
  },
  getProductTrend: async (params: any) => {
    const url = 'products/trend';
    return await axiosMy.get(url, { params });
  },
  getProductRank: async (params: any) => {
    const url = 'products/rank';
    return await axiosMy.get(url, { params });
  },
  favoriteList: async () => {
    const url = 'products/favorite-list';
    return await axiosMy.get(url);
  },
  getProductByIDUser: async (params: any) => {
    const url = 'products/iduser';
    return await axiosMy.get(url , {params});
  },
  addNewProduct: async (requestOption: any) =>{
    const url = 'products/add-new-product';
  //   const config = {     
  //     headers: { 'content-type': 'multipart/form-data' }
  // }
    return await axiosMy.post(url, requestOption );
  },
  patchProduct: async (requestOption: any) =>{
    const url = 'products/patch-product';
    return await axiosMy.patch(url, requestOption );
  },
  getAllProduct: async () => {
    const url = 'products/all';
    return await axiosMy.get(url);
  },
  getAllProductPublisher: async () => {
    const url = 'products/all-product-publisher';
    return await axiosMy.get(url);
  },
  getAllProductSupplier: async () => {
    const url = 'products/all-product-supplier';
    return await axiosMy.get(url);
  },
};
export default productApi;
