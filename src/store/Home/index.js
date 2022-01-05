import { reqCategoryList } from '@/api/index'
const state = {
    categoryList: []
}
const mutations = {
    getcategoryList(state, categoryList){
        state.categoryList = categoryList
    }
}
const actions = {
    async getcategoryList({commit}){
        let result = await reqCategoryList()
        if (result.code === 200) {
            commit('getcategoryList', result.data)
        } else {
            console.log(result.message)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}