import axiosMy from './axiosMy';
const statisticApi = {
  getStatisticByYear: async (params: IParamsStatisticByYear) => {
    const url = 'statistic/get-statistic-by-year';
    return await axiosMy.get(url, { params });
  },
};

export default statisticApi;
