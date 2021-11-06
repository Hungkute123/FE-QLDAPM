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
    
}
export default categoryApi;