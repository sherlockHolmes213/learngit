import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = {
    topNavState: '/',
    leftNavState: 'home'
}

export default new Vuex.Store({
    state
})