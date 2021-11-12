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
};
export default productApi;
