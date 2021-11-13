import axiosMy from './axiosMy';
const favoriteApi = {
  addItemToFavorite: async (params: IParamsAddFavorite) => {
    const url = 'favorite/add-item-to-favorite';
    return await axiosMy.post(url, { params });
  },
};

export default favoriteApi;
