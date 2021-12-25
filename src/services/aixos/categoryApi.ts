import axiosMy from "./axiosMy";
const categoryApi = {
    getCategoryProductByLevel: async (params : any) => {
        const url = 'category/level'
        return await axiosMy.get(url, {params})
    },
    getCategoryProductByIDParent: async (params : any) => {
        const url = 'category/idparent'
        return await axiosMy.get(url, {params})
    },
    getCategoryProductByIDParentWithSetLimit: async (params : any) => {
        const url = 'category/idparent-limit'
        return await axiosMy.get(url, {params})
    },
    getDetailCategoryByID: async (params : any) => {
        const url = 'category/idcategory'
        return await axiosMy.get(url, {params})
    },
    getOneCategory: async (params : any) => {
        const url = 'category/get-one-cate'
        return await axiosMy.get(url, {params})
    },

    updateCategory: async (params : any) => {
        const url = 'category/update-cate'
        return await axiosMy.post(url, params)
    },

    deleteCategory: async (params : any) => {
        const url = 'category/delete-cate'
        return await axiosMy.post(url, params)
    },

    addCategory: async (params : any) => {
        const url = 'category/add-cate'
        return await axiosMy.post(url, params)
    },
    getAllCate: async () => {
        const url = 'category/all-cate'
        return await axiosMy.get(url)
    },

    searchCate: async (params: any) => {
        const url = 'category/search-cate'
        return await axiosMy.get(url, {params})
    },
}
export default categoryApi;