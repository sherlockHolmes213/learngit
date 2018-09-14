import Vue from 'vue'
import Vuex from 'vuex'
import { comment } from 'postcss';
Vue.use(Vuex)


const state = {
    topNavState: '/',
    leftNavState: 'home',
    userInfo:{
        name:'李三',
        age:10,
    }
}
const getter = {
    personInfo(state){
        return state.userInfo
    }
}
const mutations = {
    SET_AGE(state,age){
        commit(aeg,age)
    },
    SET_NAME(state,name){
        commit(name,name)
    }
}
const actions = {
    
}
export default new Vuex.Store({
    state,
    getter,
    mutations,
    actions
})